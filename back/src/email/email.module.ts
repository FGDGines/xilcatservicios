import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { SubscriptionModule } from 'src/subscription/subscription.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [SubscriptionModule, MailerModule],
  providers: [EmailService],
  controllers: [EmailController],
})
export class EmailModule {}
