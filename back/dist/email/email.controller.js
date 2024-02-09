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
exports.EmailController = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
const swagger_1 = require("@nestjs/swagger");
const subscription_service_1 = require("../subscription/subscription.service");
const notification_dto_1 = require("./notification.dto");
let EmailController = class EmailController {
    constructor(emailService, sub) {
        this.emailService = emailService;
        this.sub = sub;
    }
    async sendNotificationsToSubscribers(notificationDto) {
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
                message: 'Notificaciones enviadas correctamente a todos los suscriptores',
            };
        }
        catch (error) {
            return error;
        }
    }
    async getMailboxes() {
        try {
            return [''];
        }
        catch (error) {
            console.error('Error al obtener buzones:', error);
            throw new Error('Error al obtener buzones del servidor IMAP');
        }
    }
};
exports.EmailController = EmailController;
__decorate([
    (0, common_1.Post)('sendAll'),
    (0, swagger_1.ApiOperation)({ summary: 'Enviar notificaciones a todos los suscriptores' }),
    (0, swagger_1.ApiBody)({
        type: notification_dto_1.NotificationDto,
        examples: {
            example1: {
                value: {
                    body: 'Cuerpo del mensaje',
                    topic: 'Tema de la notificación',
                },
                summary: 'Ejemplo de solicitud de notificación',
                description: 'Envía una notificación con un cuerpo y un tema específicos.',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Notificaciones enviadas correctamente',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Error al enviar las notificaciones',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notification_dto_1.NotificationDto]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendNotificationsToSubscribers", null);
__decorate([
    (0, common_1.Get)('mailboxes'),
    (0, swagger_1.ApiOperation)({ summary: 'DESHABILITADO' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "getMailboxes", null);
exports.EmailController = EmailController = __decorate([
    (0, swagger_1.ApiTags)('email'),
    (0, common_1.Controller)('email'),
    __metadata("design:paramtypes", [email_service_1.EmailService,
        subscription_service_1.SubscriptionService])
], EmailController);
//# sourceMappingURL=email.controller.js.map