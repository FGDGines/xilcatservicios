import { EmailService } from './email.service';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { NotificationDto } from './notification.dto';
export declare class EmailController {
    private readonly emailService;
    private readonly sub;
    constructor(emailService: EmailService, sub: SubscriptionService);
    sendNotificationsToSubscribers(notificationDto: NotificationDto): Promise<any>;
    getMailboxes(): Promise<string[]>;
}
