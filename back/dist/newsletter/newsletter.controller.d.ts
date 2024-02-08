import { ValidationError } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterEntity } from 'src/newsletter/newsletter.entity';
import { AuthService } from 'src/auth/auth.service';
export declare class NewsletterController {
    private readonly newsletterService;
    private readonly authService;
    constructor(newsletterService: NewsletterService, authService: AuthService);
    getAllClients(queryParams: any): Promise<NewsletterEntity[]>;
    getById(id: number): Promise<NewsletterEntity>;
    create(newsletter: NewsletterEntity): Promise<NewsletterEntity | ValidationError[]>;
    update(id: number, updatedNewsletter: NewsletterEntity): Promise<NewsletterEntity>;
    delete(id: number): Promise<NewsletterEntity>;
}
