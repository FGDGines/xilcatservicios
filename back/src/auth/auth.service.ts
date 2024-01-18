import { Injectable, ValidationError } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from './auth.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private readonly authRepository: Repository<AuthEntity>,
  ) {}

  async update(
    id: number,
    authData: Partial<AuthEntity>,
  ): Promise<AuthEntity | undefined> {
    try {
      await this.authRepository.update(id, authData);
      return await this.authRepository.findOne({ where: { id } });
    } catch (error) {
      return error;
    }
  }

  async register(
    createUserDto: AuthCredentialsDto,
  ): Promise<AuthEntity | ValidationError[]> {
    const { username, password } = createUserDto;
    try {
      const adminExists = await this.isAdminExists();
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = this.authRepository.create({
        username,
        password: hashedPassword,
        rol: !adminExists ? 'ADMINISTRATOR' : 'CLIENT',
      });

      return await this.authRepository.save(newUser);
    } catch (error) {
      return error;
    }
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<AuthEntity | null> {
    const user = await this.authRepository.findOne({ where: { username } });
    if (user && (await this.comparePassword(password, user.password))) {
      return user;
    }
    return null;
  }

  private async comparePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  async validateAuthEntity(authId: number): Promise<boolean> {
    const authEntity = await this.authRepository.findOne({
      where: { id: authId },
    });
    return !!authEntity; // Devuelve true si se encuentra la entidad, de lo contrario, devuelve false
  }

  async isAdminExists(): Promise<boolean> {
    const adminCount = await this.authRepository.count({
      where: { rol: 'ADMINISTRATOR' },
    });
    return adminCount > 0;
  }

  async findAll(page: number, limit: number): Promise<AuthEntity[]> {
    try {
      const clients = await this.authRepository
        .createQueryBuilder('auth')
        .select([
          'auth.id',
          'auth.username',
          'auth.rol',
          'auth.created_at',
          'auth.updated_at',
        ])
        .take(limit)
        .skip((page - 1) * limit)
        .getMany();

      return clients;
    } catch (error) {
      throw error;
    }
  }
}
