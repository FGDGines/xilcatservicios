"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const newsletter_entity_1 = require("./newsletter/newsletter.entity");
const newsletter_module_1 = require("./newsletter/newsletter.module");
const config_1 = require("@nestjs/config");
const mailer_1 = require("@nestjs-modules/mailer");
const subscription_module_1 = require("./subscription/subscription.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const subscription_entity_1 = require("./subscription/subscription.entity");
const contact_module_1 = require("./contact/contact.module");
const contact_entity_1 = require("./contact/contact.entity");
const cookies_module_1 = require("./cookies/cookies.module");
const cookies_middleware_1 = require("./cookies/cookies.middleware");
const cookies_entity_1 = require("./cookies/cookies.entity");
const email_module_1 = require("./email/email.module");
const auth_module_1 = require("./auth/auth.module");
const auth_entity_1 = require("./auth/auth.entity");
const client_module_1 = require("./client/client.module");
const client_entity_1 = require("./client/client.entity");
const pdf_module_1 = require("./pdf/pdf.module");
const chat_module_1 = require("./chat/chat.module");
const chat_entity_1 = require("./chat/chat.entity");
const blog_module_1 = require("./blog/blog.module");
const blog_entity_1 = require("./blog/blog.entity");
const journal_entity_1 = require("./journal/journal.entity");
const journal_module_1 = require("./journal/journal.module");
const dotenv_1 = require("dotenv");
const env = (0, path_1.join)(__dirname, '../../', '.prod_env');
(0, dotenv_1.config)({ path: env });
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(cookies_middleware_1.CookiesMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../../', 'front/dist'),
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'dc54214.online-server.cloud',
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [
                    newsletter_entity_1.NewsletterEntity,
                    subscription_entity_1.SubscriptionEntity,
                    contact_entity_1.ContactEntity,
                    cookies_entity_1.CookieEntity,
                    auth_entity_1.AuthEntity,
                    client_entity_1.ClientEntity,
                    chat_entity_1.ChatEntity,
                    blog_entity_1.BlogEntity,
                    journal_entity_1.JournalEntity,
                ],
                synchronize: true,
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.ionos.es',
                    port: 993,
                    secure: true,
                    auth: {
                        user: 'pedro@fgddesarrolloweb.es',
                        pass: 'Contraseña',
                    },
                    tls: {},
                },
            }),
            newsletter_module_1.NewsletterModule,
            subscription_module_1.SubscriptionModule,
            contact_module_1.ContactModule,
            cookies_module_1.CookiesModule,
            email_module_1.EmailModule,
            auth_module_1.AuthModule,
            client_module_1.ClientModule,
            pdf_module_1.PdfModule,
            chat_module_1.ChatModule,
            blog_module_1.BlogModule,
            journal_module_1.JournalModule,
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map