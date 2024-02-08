import { ContactEntity } from './contact.entity';
import { Repository } from 'typeorm';
import { ValidationError } from 'class-validator';
export declare class ContactService {
    private readonly contactRepository;
    constructor(contactRepository: Repository<ContactEntity>);
    findAll(): Promise<ContactEntity[]>;
    findById(id: number): Promise<ContactEntity | undefined>;
    create(contact: ContactEntity): Promise<ContactEntity | ValidationError[]>;
    update(id: number, updatedNewsletter: ContactEntity): Promise<ContactEntity>;
    delete(id: number): Promise<ContactEntity>;
}
