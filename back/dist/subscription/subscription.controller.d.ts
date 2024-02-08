import { ValidationError } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SubscriptionService } from './subscription.service';
import { SubscriptionEntity } from './subscription.entity';
import { EmailDto } from '../email/email.dto';
export declare class SubscriptionController {
    private readonly mailerService;
    private readonly subscriptionService;
    constructor(mailerService: MailerService, subscriptionService: SubscriptionService);
    subscribeToNews(email: string): Promise<any>;
    sendMail(emailData: EmailDto): Promise<SubscriptionEntity | ValidationError[]>;
}
