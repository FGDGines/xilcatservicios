import { AuthEntity } from 'src/auth/auth.entity';
export declare class JournalEntity {
    id: number;
    title: string;
    description: string;
    start: string;
    end: string;
    created_at: Date;
    updated_at: Date;
    auth: AuthEntity;
}
