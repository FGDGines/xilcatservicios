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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const subscription_service_1 = require("../subscription/subscription.service");
let EmailService = class EmailService {
    constructor(mailerService, subscriptionService) {
        this.mailerService = mailerService;
        this.subscriptionService = subscriptionService;
    }
    async sendEmail(emailDto) {
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
        }
        catch (error) {
            return error;
        }
    }
    async sendNotificationToSubscribers() {
        const emails = await this.subscriptionService.getAllSubscribedEmails();
        for (const email of emails) {
            await this.mailerService.sendMail({
                to: email,
                subject: 'Notificación',
                text: 'CORREO MASIVO',
            });
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        subscription_service_1.SubscriptionService])
], EmailService);
//# sourceMappingURL=email.service.js.map