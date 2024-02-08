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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const jwt = require("jsonwebtoken");
const auth_entity_1 = require("./auth.entity");
const auth_dto_1 = require("./auth.dto");
const platform_express_1 = require("@nestjs/platform-express");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async getAllAuth(queryParams) {
        const { page = 1, limit = 10, online, activo } = queryParams;
        return await this.authService.findAll(page, limit, online, activo);
    }
    async login(body) {
        const { username, password } = body;
        const user = await this.authService.validateUser(username, password);
        if (user) {
            const token = jwt.sign({
                username: user.username,
                id: user.id,
                rol: user.rol,
                imagePath: user.imagePath,
                created_at: user.created_at,
            }, 'xilcat');
            return { token };
        }
        return { message: 'Credenciales inválidas' };
    }
    async register(createUserDto) {
        return await this.authService.register(createUserDto);
    }
    async updateClient(id, authData) {
        return await this.authService.update(id, authData);
    }
    async deleteClient(id) {
        return await this.authService.delete(id);
    }
    async uploadPDF(authId, file) {
        try {
            const { filePath, fileName } = await this.authService.handleFileUpload(file, authId);
            return { success: true, filePath, fileName };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'online', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'activo', required: false, type: Boolean }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all Auths.' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAllAuth", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login successful. Returns the token.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid credentials.' }),
    (0, swagger_1.ApiBody)({
        description: 'Login credentials example',
        type: auth_dto_1.AuthCredentialsDto,
        examples: {
            example1: {
                value: {
                    username: 'new_user',
                    password: 'new_password',
                },
                summary: 'Sample contact Object',
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthCredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    (0, swagger_1.ApiBody)({
        description: 'Create user example',
        type: auth_entity_1.AuthEntity,
        examples: {
            example1: {
                value: {
                    username: 'user',
                    password: 'password',
                },
                summary: 'Sample contact Object',
            },
        },
    }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({
        skipMissingProperties: true,
        forbidNonWhitelisted: true,
        whitelist: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthCredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Auth ID', type: Number }),
    (0, swagger_1.ApiBody)({ type: auth_entity_1.AuthEntity }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Update a Auth.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateClient", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Client ID', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Delete a auth.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deleteClient", null);
__decorate([
    (0, common_1.Post)('upload-image/:authId'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Upload image file',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Update a client PDF.' }),
    __param(0, (0, common_1.Param)('authId')),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [new common_1.FileTypeValidator({ fileType: 'image/jpeg' })],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "uploadPDF", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map