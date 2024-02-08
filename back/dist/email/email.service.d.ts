import { MailerService } from '@nestjs-modules/mailer';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { EmailDto } from './email.dto';
export declare class EmailService {
    private readonly mailerService;
    private readonly subscriptionService;
    constructor(mailerService: MailerService, subscriptionService: SubscriptionService);
    sendEmail(emailDto: EmailDto): Promise<void>;
    sendNotificationToSubscribers(): Promise<void>;
}
