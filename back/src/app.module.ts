import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsletterEntity } from './newsletter/newsletter.entity';
import { NewsletterModule } from './newsletter/newsletter.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { SubscriptionModule } from './subscription/subscription.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SubscriptionEntity } from './subscription/subscription.entity';
import { ContactModule } from './contact/contact.module';
import { ContactEntity } from './contact/contact.entity';
import { CookiesModule } from './cookies/cookies.module';
import { CookiesMiddleware } from './cookies/cookies.middleware';
import { CookieEntity } from './cookies/cookies.entity';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'front/dist'),
    }),
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles globalmente
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_CONNECTION as any,
      host: process.env.DB_HOST as any,
      port: process.env.DB_PORT as any,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        NewsletterEntity,
        SubscriptionEntity,
        ContactEntity,
        CookieEntity,
      ], // Agrega tus entidades aquí
      synchronize: true, // Opcional: sincroniza automáticamente las entidades con la base de datos (cuidado en producción)
    }),
    MailerModule.forRoot({
      // transport: {
      //   host: process.env.SMTP_HOST,
      //   port: Number(process.env.SMTP_PORT),
      //   secure: process.env.SMTP_SECURE === 'true',
      //   auth: {
      //     user: process.env.SMTP_USER,
      //     pass: process.env.SMTP_PASS,
      //   },
      // },
      transport: {
        host: 'imap.ionos.es',
        port: 993,
        secure: true,
        auth: {
          user: 'pedro@fgddesarrolloweb.es',
          pass: 'Contraseña',
        },
        tls: {
          // Puedes configurar opciones TLS aquí si es necesario
          // Consulta la documentación para las opciones disponibles
        },
      },
    }),
    NewsletterModule,
    SubscriptionModule,
    ContactModule,
    CookiesModule,
    EmailModule, // Agrega aquí también tus entidades si las necesitas en otros módulos
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CookiesMiddleware).forRoutes('*');
  }
}
