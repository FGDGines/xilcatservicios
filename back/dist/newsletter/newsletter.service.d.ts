import { ValidationError } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NewsletterEntity } from 'src/newsletter/newsletter.entity';
export declare class NewsletterService {
    private readonly newsletterRepository;
    constructor(newsletterRepository: Repository<NewsletterEntity>);
    findAll(page: number, limit: number): Promise<NewsletterEntity[]>;
    findById(id: number): Promise<NewsletterEntity | undefined>;
    create(newsletter: NewsletterEntity): Promise<NewsletterEntity | ValidationError[]>;
    update(id: number, updatedNewsletter: NewsletterEntity): Promise<NewsletterEntity>;
    delete(id: number): Promise<NewsletterEntity>;
}
