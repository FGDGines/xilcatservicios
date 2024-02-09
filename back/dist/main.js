"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('/api');
    const corsOptions = {
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    };
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: false,
        forbidNonWhitelisted: false,
        transform: false,
        transformOptions: {
            enableImplicitConversion: false,
            excludeExtraneousValues: false,
        },
        validationError: { target: false },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Xilcat servicios API')
        .setDescription('Descripción de tu API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('doc', app, document);
    app.enableCors(corsOptions);
    app.use(cookieParser());
    await app.listen(3000);
    console.log(`Puerto Backend: ${await app.getUrl()}`);
    console.log(`Puerto Swagger: ${(await app.getUrl()) + '/doc'}`);
}
bootstrap();
//# sourceMappingURL=main.js.map