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
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
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

  // Verificar si estamos en modo de desarrollo antes de configurar Swagger
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .setTitle('Xilcat servicios API')
      .setDescription('Descripción de tu API')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('doc', app, document);
  }

  app.enableCors(corsOptions); // Habilitar CORS con las opciones especificadas
  app.use(cookieParser());
  await app.listen(3000);
  console.log(`Puerto Backend: ${await app.getUrl()}`);
  // Mostrar la URL de Swagger solo en modo de desarrollo
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log(`Puerto Swagger: ${(await app.getUrl()) + '/doc'}`);
  }
}
bootstrap();
