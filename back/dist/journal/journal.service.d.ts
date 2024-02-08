import { ValidationError } from '@nestjs/common';
import { JournalEntity } from './journal.entity';
import { Repository } from 'typeorm';
export declare class JournalService {
    private readonly journalRepository;
    constructor(journalRepository: Repository<JournalEntity>);
    findAll(page: number, limit: number): Promise<JournalEntity[]>;
    findById(id: number): Promise<JournalEntity | undefined>;
    create(journal: JournalEntity): Promise<JournalEntity | ValidationError[]>;
    update(id: number, updatedNewJournal: JournalEntity): Promise<JournalEntity>;
    delete(id: number): Promise<JournalEntity>;
}
