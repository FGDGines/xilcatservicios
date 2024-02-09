import { AuthEntity } from 'src/auth/auth.entity';
export declare class NewsletterEntity {
    id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date;
    auth: AuthEntity;
}
