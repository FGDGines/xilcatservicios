import { Injectable, ValidationError } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from './auth.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private readonly userRepository: Repository<AuthEntity>,
  ) {}

  async register(
    createUserDto: AuthEntity,
  ): Promise<AuthEntity | ValidationError[]> {
    const { username, password } = createUserDto;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = this.userRepository.create({
        username,
        password: hashedPassword,
      });

      return await this.userRepository.save(newUser);
    } catch (error) {
      return error;
    }
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<AuthEntity | null> {
    const user = await this.userRepository.findOne({ where: { username } });
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
}
