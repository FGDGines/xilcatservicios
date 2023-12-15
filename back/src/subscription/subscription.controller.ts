import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  ValidationError,
} from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { SubscriptionService } from './subscription.service';
import { SubscriptionEntity } from './subscription.entity';
import { EmailDto } from './email.dto';
import { validate } from 'class-validator';

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
          example: 'colcapedro@gmail.com',
        },
      },
    },
  })
  async subscribeToNews(@Body('email') email: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: '¡Te has suscrito a nuestras noticias!',
        text: 'Gracias por suscribirte a nuestras noticias.',
      });

      return {
        message:
          'Suscrito exitosamente. Se ha enviado un correo de confirmación.',
      };
    } catch (error) {
      return error;
    }
  }

  @Post('send')
  @ApiBody({
    description: 'Ejemplo de datos para enviar correo HTML',
    schema: {
      type: 'object',
      properties: {
        // subject: { type: 'string', example: 'Asunto del correo' },
        body: {
          type: 'string',
          example: `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Confirmación de Suscripción</title>
          </head>
          <body style="font-family: Arial, sans-serif;">
          
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="text-align: center; color: #333;">¡Se ha suscrito correctamente!</h2>
              <p style="text-align: center; color: #666;">
                Gracias por suscribirte a nuestro boletín. Estás a punto de recibir noticias y actualizaciones emocionantes.
              </p>
              <p style="text-align: center; color: #666;">
                ¡Estamos emocionados de tenerte como parte de nuestra comunidad!
              </p>
              <p style="text-align: center; color: #666;">
                Atentamente,<br>
                XILCAT
              </p>
            </div>
          </body>
          </html>`,
        },
        reciver: { type: 'string', example: 'colcapedro@gmail.com' },
        topic: { type: 'string', example: 'Suscripción XILCAT NEWSLETTER' },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Correo enviado correctamente' })
  @ApiResponse({
    status: 500,
    description: 'Hubo un error al enviar el correo',
  })
  async sendMail(
    @Body(new ValidationPipe()) emailData: EmailDto,
  ): Promise<SubscriptionEntity | ValidationError[]> {
    try {
      const errors = await validate(emailData);
      if (errors.length > 0) {
        return errors;
      }
      const result = await this.subscriptionService.sendEmail(emailData);
      return result;
    } catch (error) {
      return error;
    }
  }

  // Puedes tener otros métodos aquí para manejar la recepción de noticias y enviar correos a los suscriptores cuando hay noticias disponibles.
}
