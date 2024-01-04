import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { AuthEntity } from 'src/auth/auth.entity';

@Injectable()
export class ChatService {
  private authclient: Record<number, Partial<AuthEntity>> = {};

  onAuthConnect(auth: Partial<AuthEntity>) {
    this.authclient[auth.username] = auth;
  }

  onAuthDisconnect(username: string) {
    delete this.authclient[username];
  }

  getAuthAll() {
    return Object.values(this.authclient);
  }

  create(createChatDto: CreateChatDto) {
    return 'This action adds a new chat';
  }

  findAll() {
    return `This action returns all chat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
