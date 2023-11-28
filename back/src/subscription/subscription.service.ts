import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionService {
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

      const response = await fetch(String(process.env.API_MAIL), {
        method: 'POST',
        body: bag,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error al enviar el correo');
    }
  }
}
