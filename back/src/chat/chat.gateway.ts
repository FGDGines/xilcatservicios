import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { OnModuleInit, ValidationPipe } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';
import { ChatEntity } from './chat.entity';

@WebSocketGateway()
export class ChatGateway implements OnModuleInit {
  @WebSocketServer()
  public server: Server;
  constructor(
    private readonly chatService: ChatService,
    private readonly authService: AuthService,
  ) {
    this.server = new Server({
      cors: {
        origin: true,
        credentials: true,
      },
    });
  }
  onModuleInit() {
    this.server.on('connection', async (socket: Socket) => {
      const { name, token, authId } = socket.handshake.auth;
      console.log({ name, token, authId });
      if (!name) {
        socket.disconnect();
        return;
      }

      this.chatService.onAuthConnect({
        username: name,
      });
      // console.log(await this.chatService.findAll(1, 0));

      this.server.emit('on-auth-change', this.chatService.getAuthAll());
      this.server.emit('on-message', await this.chatService.findAll(1, 0));

      socket.on('disconnect', () => {
        this.chatService.onAuthDisconnect(name);
        this.server.emit('on-auth-change', this.chatService.getAuthAll());
      });
    });
  }

  @SubscribeMessage('send-message')
  async handleMessage(@MessageBody(new ValidationPipe()) chat: ChatEntity) {
    try {
      await this.chatService.createChat(chat);
      this.server.emit('on-message', await this.chatService.findAll(1, 0));

      if (!chat) {
        return;
      }
    } catch (error) {
      return error;
    }
  }

  // @SubscribeMessage('createChat')
  // create(@MessageBody() createChatDto: CreateChatDto) {
  //   return this.chatService.create(createChatDto);
  // }

  // @SubscribeMessage('findAllChat')
  // findAll() {
  //   return this.chatService.findAll();
  // }

  @SubscribeMessage('findOneChat')
  findOne(@MessageBody() id: number) {
    return this.chatService.findOne(id);
  }

  @SubscribeMessage('removeChat')
  remove(@MessageBody() id: number) {
    return this.chatService.remove(id);
  }
}
