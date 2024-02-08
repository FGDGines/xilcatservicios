import { ValidationError } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JournalService } from './journal.service';
import { JournalEntity } from './journal.entity';
export declare class JournalController {
    private readonly journalService;
    private readonly authService;
    constructor(journalService: JournalService, authService: AuthService);
    getAllClients(queryParams: any): Promise<JournalEntity[]>;
    getById(id: number): Promise<JournalEntity>;
    create(newsletter: JournalEntity): Promise<JournalEntity | ValidationError[]>;
    update(id: number, updatedNewsletter: JournalEntity): Promise<JournalEntity>;
    delete(id: number): Promise<JournalEntity>;
}
