import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { NotificationDto } from './notification.dto';

@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(
    private readonly emailService: EmailService,
    private readonly sub: SubscriptionService,
  ) {}

  @Post('sendAll')
  @ApiOperation({ summary: 'Enviar notificaciones a todos los suscriptores' })
  @ApiBody({
    type: NotificationDto,
    examples: {
      example1: {
        value: {
          body: 'Cuerpo del mensaje',
          topic: 'Tema de la notificación',
        },
        summary: 'Ejemplo de solicitud de notificación',
        description:
          'Envía una notificación con un cuerpo y un tema específicos.',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Notificaciones enviadas correctamente',
  })
  @ApiResponse({
    status: 500,
    description: 'Error al enviar las notificaciones',
  })
  async sendNotificationsToSubscribers(
    @Body() notificationDto: NotificationDto,
  ) {
    try {
      const subscribedEmails = await this.sub.getAllSubscribedEmails();

      const notificationsPromises = subscribedEmails.map(async (email) => {
        const emailDto = {
          body: notificationDto.body,
          reciver: email,
          topic: notificationDto.topic,
        };
        return await this.emailService.sendEmail(emailDto);
      });

      await Promise.all(notificationsPromises);

      return {
        message:
          'Notificaciones enviadas correctamente a todos los suscriptores',
      };
    } catch (error) {
      return error;
    }
  }

  @Get('mailboxes')
  @ApiOperation({ summary: 'DESHABILITADO' })
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
