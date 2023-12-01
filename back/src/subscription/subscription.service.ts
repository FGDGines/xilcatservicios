import { Injectable } from '@nestjs/common';
import { SubscriptionEntity } from './subscription.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
      const bag = new FormData();
      bag.set('req', 'gmail_send');
      bag.set('topic', '');
      bag.set('body', '');
      bag.set('reciver', '');

      Object.keys(mailData).forEach((item) => {
        bag.set(String(item), String(mailData[item]));
      });

      await this.subscriptionRepository.save({
        email: 'colcapedro@gmail.com',
      });

      const response = await fetch(String(process.env.API_MAIL), {
        method: 'POST',
        body: bag,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
}
