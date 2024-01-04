import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { OnModuleInit } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnModuleInit {
  @WebSocketServer()
  public server: Server;
  constructor(private readonly chatService: ChatService) {
    this.server = new Server({
      cors: {
        origin: true, // Coloca aquí el origen permitido
        credentials: true, // Habilitar credenciales si es necesario
      },
    }); // Inicializar el servidor de Socket.io
  }
  onModuleInit() {
    this.server.on('connection', (socket: Socket) => {
      const { name, token } = socket.handshake.auth;
      console.log({ name, token });
      if (!name) {
        socket.disconnect();
        return;
      }

      this.chatService.onAuthConnect({
        username: name,
      });

      this.server.emit('on-auth-change', this.chatService.getAuthAll());

      socket.emit('welcome-server', 'Bienvenido a mi servicio');

      socket.on('disconnect', () => {
        this.chatService.onAuthDisconnect(name);
        this.server.emit('on-auth-change', this.chatService.getAuthAll());
      });
    });
  }

  @SubscribeMessage('createChat')
  create(@MessageBody() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @SubscribeMessage('findAllChat')
  findAll() {
    return this.chatService.findAll();
  }

  @SubscribeMessage('findOneChat')
  findOne(@MessageBody() id: number) {
    return this.chatService.findOne(id);
  }

  @SubscribeMessage('updateChat')
  update(@MessageBody() updateChatDto: UpdateChatDto) {
    return this.chatService.update(updateChatDto.id, updateChatDto);
  }

  @SubscribeMessage('removeChat')
  remove(@MessageBody() id: number) {
    return this.chatService.remove(id);
  }
}
