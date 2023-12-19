import { Injectable, ValidationError } from '@nestjs/common';
import { SubscriptionEntity } from './subscription.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';
import { EmailDto } from '../email/email.dto';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(SubscriptionEntity)
    private readonly subscriptionRepository: Repository<SubscriptionEntity>,
  ) {}

  async getAllSubscribedEmails(): Promise<string[]> {
    const subscriptions = await this.subscriptionRepository.find();
    return subscriptions.map((subscription) => subscription.email);
  }

  async create(newsletter: SubscriptionEntity): Promise<SubscriptionEntity> {
    return await this.subscriptionRepository.save(newsletter);
  }
  async sendEmail(
    emailDto: EmailDto,
  ): Promise<SubscriptionEntity | ValidationError[]> {
    try {
      const { body, reciver, topic } = emailDto;

      const bag = new FormData();
      bag.set('req', 'gmail_send');
      bag.set('topic', topic);
      bag.set('body', body);
      bag.set('reciver', reciver);

      const response = await this.subscriptionRepository.save({
        email: reciver,
      });

      const form = new SubscriptionEntity();
      form.email = reciver;
      const formErrors = await validate(form);

      if (formErrors.length > 0) {
        return formErrors;
      }

      await fetch(process.env.API_MAIL, {
        method: 'POST',
        body: bag,
      });

      return response;
    } catch (error) {
      return error;
    }
  }
}
