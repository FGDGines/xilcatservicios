import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly imapService: EmailService) {}

  @Get('mailboxes')
  async getMailboxes(): Promise<string[]> {
    try {
      // const mailboxes = await this.imapService.getMailboxes();
      // return mailboxes;
      return [''];
    } catch (error) {
      console.error('Error al obtener buzones:', error);
      throw new Error('Error al obtener buzones del servidor IMAP');
    }
  }
}
