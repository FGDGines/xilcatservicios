import { ValidationError } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactEntity } from './contact.entity';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    getAll(): Promise<ContactEntity[]>;
    getById(id: number): Promise<ContactEntity>;
    create(newsletter: ContactEntity): Promise<ContactEntity | ValidationError[]>;
    update(id: number, updatedNewsletter: ContactEntity): Promise<ContactEntity>;
    delete(id: number): Promise<ContactEntity>;
}
