import { ValidationError } from '@nestjs/common';
import { SubscriptionEntity } from './subscription.entity';
import { Repository } from 'typeorm';
import { EmailDto } from '../email/email.dto';
export declare class SubscriptionService {
    private readonly subscriptionRepository;
    constructor(subscriptionRepository: Repository<SubscriptionEntity>);
    getAllSubscribedEmails(): Promise<string[]>;
    create(newsletter: SubscriptionEntity): Promise<SubscriptionEntity>;
    sendEmail(emailDto: EmailDto): Promise<SubscriptionEntity | ValidationError[]>;
}
