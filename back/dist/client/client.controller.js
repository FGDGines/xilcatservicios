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
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const client_service_1 = require("./client.service");
const client_entity_1 = require("./client.entity");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const auth_service_1 = require("../auth/auth.service");
let ClientController = class ClientController {
    constructor(clientService, authService) {
        this.clientService = clientService;
        this.authService = authService;
    }
    async getAllClients(queryParams) {
        const { page = 1, limit = 10 } = queryParams;
        return await this.clientService.findAll(page, limit);
    }
    async getClientById(id) {
        try {
            const client = await this.clientService.findById(id);
            return client;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createClient(clientData) {
        const authIdExists = await this.authService.validateAuthEntity(clientData.auth);
        if (!authIdExists) {
            throw new common_1.BadRequestException('El ID de AuthEntity proporcionado no existe');
        }
        return await this.clientService.create(clientData);
    }
    async updateClient(id, clientData) {
        return await this.clientService.update(id, clientData);
    }
    async deleteClient(id) {
        return await this.clientService.delete(id);
    }
    async uploadPDF(clientId, pdfType, pdf) {
        try {
            const { filePath, fileName } = await this.clientService.handleFileUpload(pdf, clientId, pdfType);
            return { success: true, filePath, fileName };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ClientController = ClientController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all clients.' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getAllClients", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Client ID', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a specific client.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClientById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiBody)({
        type: client_entity_1.ClientEntity,
        description: 'Client creation example',
        examples: {
            example1: {
                value: {
                    name: 'John Doe',
                    email: 'johndoe@example.com',
                    address: '123 Main St',
                    mainPhone: '+34123456789',
                    priceQuote: 100,
                    price: 150,
                    auth: 5,
                    pdf: [
                        { typePdf: '', path: '' },
                        { typePdf: '', path: '' },
                    ],
                    tramiteType: 'TYPE1',
                    paymentStatus: 'PENDING',
                },
                summary: 'Sample client Object',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Create a new client.' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_entity_1.ClientEntity]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "createClient", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Client ID', type: Number }),
    (0, swagger_1.ApiBody)({ type: client_entity_1.ClientEntity }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Update a client.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "updateClient", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Client ID', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Delete a client.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "deleteClient", null);
__decorate([
    (0, common_1.Post)('upload-pdf/:clientId/:pdfType'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('pdf')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Upload PDF file',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                pdf: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Update a client PDF.' }),
    __param(0, (0, common_1.Param)('clientId')),
    __param(1, (0, common_1.Param)('pdfType')),
    __param(2, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [new common_1.FileTypeValidator({ fileType: 'pdf' })],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "uploadPDF", null);
exports.ClientController = ClientController = __decorate([
    (0, swagger_1.ApiTags)('client'),
    (0, common_1.Controller)('client'),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        auth_service_1.AuthService])
], ClientController);
//# sourceMappingURL=client.controller.js.map