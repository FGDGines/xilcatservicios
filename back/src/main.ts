import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');

  const corsOptions: CorsOptions = {
    origin: true, // Permite solicitudes desde todas las fuentes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Accept', // Encabezados permitidos
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      forbidNonWhitelisted: false,
      transform: false,
      transformOptions: {
        enableImplicitConversion: false,
        excludeExtraneousValues: false,
      },
      validationError: { target: false },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Xilcat servicios API')
    .setDescription('Descripción de tu API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  app.enableCors(corsOptions); // Habilitar CORS con las opciones especificadas
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
