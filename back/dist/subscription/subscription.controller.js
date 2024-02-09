"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const swagger_1 = require("@nestjs/swagger");
const subscription_service_1 = require("./subscription.service");
const email_dto_1 = require("../email/email.dto");
const class_validator_1 = require("class-validator");
let SubscriptionController = class SubscriptionController {
    constructor(mailerService, subscriptionService) {
        this.mailerService = mailerService;
        this.subscriptionService = subscriptionService;
    }
    async subscribeToNews(email) {
        try {
            await this.mailerService.sendMail({
                to: email,
                subject: '¡Te has suscrito a nuestras noticias!',
                text: 'Gracias por suscribirte a nuestras noticias.',
            });
            return {
                message: 'Suscrito exitosamente. Se ha enviado un correo de confirmación.',
            };
        }
        catch (error) {
            return error;
        }
    }
    async sendMail(emailData) {
        try {
            const errors = await (0, class_validator_1.validate)(emailData);
            if (errors.length > 0) {
                return errors;
            }
            const result = await this.subscriptionService.sendEmail(emailData);
            return result;
        }
        catch (error) {
            return error;
        }
    }
};
exports.SubscriptionController = SubscriptionController;
__decorate([
    (0, common_1.Post)('subscribe'),
    (0, swagger_1.ApiBody)({
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
    }),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "subscribeToNews", null);
__decorate([
    (0, common_1.Post)('send'),
    (0, swagger_1.ApiBody)({
        description: 'Ejemplo de datos para enviar correo HTML',
        schema: {
            type: 'object',
            properties: {
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
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Correo enviado correctamente' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Hubo un error al enviar el correo',
    }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_dto_1.EmailDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "sendMail", null);
exports.SubscriptionController = SubscriptionController = __decorate([
    (0, swagger_1.ApiTags)('subscription'),
    (0, common_1.Controller)('subscription'),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        subscription_service_1.SubscriptionService])
], SubscriptionController);
//# sourceMappingURL=subscription.controller.js.map