import { ChatEntity } from './chat.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
export declare class ChatService {
    private readonly chatRepository;
    private readonly authService;
    constructor(chatRepository: Repository<ChatEntity>, authService: AuthService);
    createChat(chat: Partial<ChatEntity>): Promise<any>;
    getAuthAll(): Promise<import("../auth/auth.entity").AuthEntity[]>;
    findAll(page: number, limit: number): Promise<ChatEntity[]>;
    findOne(id: number): string;
    remove(id: number): string;
}
