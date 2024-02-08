import { AuthEntity } from 'src/auth/auth.entity';
export declare class ChatEntity {
    id: number;
    message: string;
    created_at: Date;
    updated_at: Date;
    auth: AuthEntity;
}
