import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
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
import { AuthModule } from './auth/auth.module';
import { AuthEntity } from './auth/auth.entity';
import { ClientModule } from './client/client.module';
import { ClientEntity } from './client/client.entity';
import { PdfModule } from './pdf/pdf.module';
import { ChatModule } from './chat/chat.module';
import { ChatEntity } from './chat/chat.entity';
import { BlogModule } from './blog/blog.module';
import { BlogEntity } from './blog/blog.entity';
import { JournalEntity } from './journal/journal.entity';
import { JournalModule } from './journal/journal.module';

import { config } from 'dotenv';

const env = join(__dirname, '../../', '.prod_env');
// const env = join(__dirname, '../../', '.dev_env');
console.log('ENV TYPE', process.env.NODE_ENV)

config({ path: env });

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'front/dist'),
    }),
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles globalmente
    }),
    TypeOrmModule.forRoot({
      // type: 'mariadb',
      // host: 'dc54214.online-server.cloud',
      // port: Number(3306),
      // username: 'xilicat',
      // password: 'qRU6Aj62p~gkps~l',
      // database: 'xilicat_',      
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        NewsletterEntity,
        SubscriptionEntity,
        ContactEntity,
        CookieEntity,
        AuthEntity,
        ClientEntity,
        ChatEntity,
        BlogEntity,
        JournalEntity,
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
    NewsletterModule,
    SubscriptionModule,
    ContactModule,
    CookiesModule,
    EmailModule,
    AuthModule,
    ClientModule,
    PdfModule,
    ChatModule,
    BlogModule,
    JournalModule,
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CookiesMiddleware).forRoutes('*');
  }
}
