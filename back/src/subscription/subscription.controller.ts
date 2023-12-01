import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { SubscriptionService } from './subscription.service';

@ApiTags('subscription')
@Controller('subscription')
export class SubscriptionController {
  constructor(
    private readonly mailerService: MailerService,
    private readonly subscriptionService: SubscriptionService,
  ) {}

  @Post('subscribe')
  @ApiBody({
    description: 'Correo electrónico para la suscripción a noticias',
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'usuario@dominio.com',
        },
      },
    },
  })
  async subscribeToNews(@Body('email') email: string) {
    // Enviar correo de notificación de suscripción
    await this.mailerService.sendMail({
      to: email,
      subject: '¡Te has suscrito a nuestras noticias!',
      text: 'Gracias por suscribirte a nuestras noticias.',
    });

    return {
      message:
        'Suscrito exitosamente. Se ha enviado un correo de confirmación.',
    };
  }

  @Post('send')
  @ApiBody({
    description: 'Ejemplo de datos para enviar correo',
    schema: {
      type: 'object',
      properties: {
        // subject: { type: 'string', example: 'Asunto del correo' },
        body: { type: 'string', example: 'Te subscribiste felicidades' },
        reciver: { type: 'string', example: 'destinatario@example.com' },
        topic: { type: 'string', example: 'Subscription XILCAT NEWSLETTER' },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Correo enviado correctamente' })
  @ApiResponse({
    status: 500,
    description: 'Hubo un error al enviar el correo',
  })
  async sendMail(@Body() mailData: { [key: string]: string }) {
    try {
      // Aquí llamamos al servicio que enviará el correo
      const result = await this.subscriptionService.sendEmail(mailData);
      return { message: 'Correo enviado correctamente', result };
    } catch (error) {
      return { message: 'Hubo un error al enviar el correo', error };
    }
  }

  // Puedes tener otros métodos aquí para manejar la recepción de noticias y enviar correos a los suscriptores cuando hay noticias disponibles.
}
