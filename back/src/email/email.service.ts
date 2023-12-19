import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { EmailDto } from './email.dto';
// import * as Imap from 'node-imap';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly subscriptionService: SubscriptionService,
  ) {}

  async sendEmail(emailDto: EmailDto): Promise<void> {
    const { body, reciver, topic } = emailDto;

    const formData = new FormData();
    formData.append('req', 'gmail_send');
    formData.append('topic', topic);
    formData.append('body', body);
    formData.append('reciver', reciver);

    try {
      await fetch(process.env.API_MAIL, {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      // Manejo de errores si la solicitud falla
      return error;
    }
  }

  async sendNotificationToSubscribers(): Promise<void> {
    const emails = await this.subscriptionService.getAllSubscribedEmails();

    for (const email of emails) {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Notificación',
        text: 'CORREO MASIVO',
      });
    }
  }

  // private readonly imap: Imap;
  // constructor() {
  //   this.imap = new Imap({
  //     user: 'tu_email@example.com',
  //     password: 'tu_contraseña',
  //     host: 'imap.example.com',
  //     port: 993, // Puerto IMAP con SSL
  //     tls: true, // Habilita TLS/SSL
  //     tlsOptions: { rejectUnauthorized: false }, // Opciones TLS específicas (en este ejemplo, permitiendo certificados no autorizados)
  //   });
  //   this.imap.once('ready', () => {
  //     console.log('Conexión IMAP lista');
  //   });
  //   this.imap.once('error', (error) => {
  //     console.error('Error en la conexión IMAP:', error);
  //   });
  //   this.imap.connect();
  // }
  // // Método para obtener buzones disponibles
  // async getMailboxes(): Promise<string[]> {
  //   return new Promise<string[]>((resolve, reject) => {
  //     this.imap.getBoxes((error, mailboxes) => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         const mailboxNames = Object.keys(mailboxes);
  //         resolve(mailboxNames);
  //       }
  //     });
  //   });
  // }
}
