import { AuthEntity } from 'src/auth/auth.entity';
export declare class BlogEntity {
    id: number;
    title: string;
    content: string;
    imagePath: string;
    created_at: Date;
    updated_at: Date;
    auth: AuthEntity;
}
