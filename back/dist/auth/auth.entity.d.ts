import { ClientEntity } from 'src/client/client.entity';
import { Rol } from './auth.dto';
import { NewsletterEntity } from 'src/newsletter/newsletter.entity';
import { ChatEntity } from 'src/chat/chat.entity';
export declare class AuthEntity {
    id: number;
    username: string;
    password: string;
    rol: Rol;
    activo: boolean;
    online: boolean;
    imagePath: string;
    created_at: Date;
    updated_at: Date;
    clients: ClientEntity[];
    newsletters: NewsletterEntity[];
    chats: ChatEntity[];
}
