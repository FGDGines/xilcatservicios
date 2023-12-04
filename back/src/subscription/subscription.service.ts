import { Injectable } from '@nestjs/common';
import { SubscriptionEntity } from './subscription.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(SubscriptionEntity)
    private readonly subscriptionRepository: Repository<SubscriptionEntity>,
  ) {}

  async create(newsletter: SubscriptionEntity): Promise<SubscriptionEntity> {
    return await this.subscriptionRepository.save(newsletter);
  }

  async sendEmail(mailData: { [key: string]: string }) {
    try {
      if (!mailData.body || !mailData.reciver || !mailData.topic) {
        return { message: 'Los campos body, reciver y topic son obligatorios' };
      }
      const bag = new FormData();
      bag.set('req', 'gmail_send');
      bag.set('topic', '');
      bag.set('body', '');
      bag.set('reciver', '');

      Object.keys(mailData).forEach((item) => {
        bag.set(String(item), String(mailData[item]));
      });

      await this.subscriptionRepository.save({
        email: mailData.reciver,
      });

      const form = new SubscriptionEntity();
      form.email = mailData.reciver;
      const errors = await validate(form);

      if (errors.length > 0) {
        return errors;
      }

      const response = await fetch(process.env.API_MAIL, {
        method: 'POST',
        body: bag,
      });

      return await response.json();
    } catch (error) {
      return error;
    }
  }
}
