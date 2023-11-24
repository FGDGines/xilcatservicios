import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjemploController } from './ejemplo/ejemplo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsletterEntity } from './newsletter/newsletter.entity';
import { NewsletterModule } from './newsletter/newsletter.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { SubscriptionModule } from './subscription/subscription.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      renderPath: join(__dirname,'../../','front/dist')
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
      entities: [NewsletterEntity], // Agrega tus entidades aquí
      synchronize: true, // Opcional: sincroniza automáticamente las entidades con la base de datos (cuidado en producción)
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    }),
    NewsletterModule,
    SubscriptionModule, // Agrega aquí también tus entidades si las necesitas en otros módulos
  ],
  controllers: [AppController, EjemploController],
  providers: [AppService],
})
export class AppModule {}
