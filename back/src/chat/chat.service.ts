import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from 'src/auth/auth.entity';
import { ChatEntity } from './chat.entity';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>,
  ) {}
  private authclient: Record<number, Partial<AuthEntity>> = {};

  onAuthConnect(auth: Partial<AuthEntity>) {
    this.authclient[auth.username] = auth;
  }

  onAuthDisconnect(username: string) {
    delete this.authclient[username];
  }

  async createChat(chat: Partial<ChatEntity>) {
    try {
      const newClient = this.chatRepository.create(chat);

      const errors = await validate(newClient);

      if (errors.length > 0) {
        return errors;
      }
      return await this.chatRepository.save(newClient);
    } catch (error) {
      return error;
    }
  }

  getAuthAll() {
    return Object.values(this.authclient);
  }

  async findAll(page: number, limit: number): Promise<ChatEntity[]> {
    try {
      const chats = await this.chatRepository
        .createQueryBuilder('chat')
        .leftJoin('chat.auth', 'auth')
        .select([
          'chat.id',
          'chat.message',
          'chat.created_at',
          'chat.updated_at',
          // Seleccionando todos los campos de 'auth' excepto 'password'
          'auth.id',
          'auth.username',
          'auth.created_at',
          'auth.updated_at',
        ])
        .take(limit)
        .skip((page - 1) * limit)
        .getMany();

      return chats;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
