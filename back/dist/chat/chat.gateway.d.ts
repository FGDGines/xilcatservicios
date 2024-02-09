import { ChatService } from './chat.service';
import { OnModuleInit } from '@nestjs/common';
import { Server } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';
import { ChatEntity } from './chat.entity';
export declare class ChatGateway implements OnModuleInit {
    private readonly chatService;
    private readonly authService;
    server: Server;
    constructor(chatService: ChatService, authService: AuthService);
    onModuleInit(): void;
    handleMessage(chat: ChatEntity): Promise<any>;
}
