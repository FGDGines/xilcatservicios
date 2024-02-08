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
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const blog_service_1 = require("./blog.service");
const swagger_1 = require("@nestjs/swagger");
const blog_entity_1 = require("./blog.entity");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const fs_1 = require("fs");
let BlogController = class BlogController {
    constructor(blogService, authService) {
        this.blogService = blogService;
        this.authService = authService;
    }
    async getAllClients(queryParams) {
        const { page = 1, limit = 10 } = queryParams;
        return await this.blogService.findAll(page, limit);
    }
    async getById(id) {
        return await this.blogService.findById(id);
    }
    async getPicture(id, name) {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), 'public', 'blog', id, name));
        return new common_1.StreamableFile(file);
    }
    async create(newsletter) {
        const authIdExists = await this.authService.validateAuthEntity(newsletter.auth);
        if (!authIdExists) {
            throw new common_1.BadRequestException('El ID de AuthEntity proporcionado no existe');
        }
        return await this.blogService.create(newsletter);
    }
    async update(id, updatedNewsletter) {
        return await this.blogService.update(id, updatedNewsletter);
    }
    async delete(id) {
        return await this.blogService.delete(id);
    }
    async uploadPDF(blogId, file) {
        console.log('GETTING FILEEEEE ', file);
        try {
            const { filePath, fileName } = await this.blogService.handleFileUpload(file, blogId);
            return { success: true, filePath, fileName };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.BlogController = BlogController;
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
], BlogController.prototype, "getAllClients", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Newsletter ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a newsletter by ID.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('/picture/:id/:name'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getPicture", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiBody)({
        type: blog_entity_1.BlogEntity,
        description: 'New newsletter object',
        examples: {
            example1: {
                value: { title: 'Sample Title', content: 'Sample Content', auth: 0 },
                summary: 'Sample Newsletter Object',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The newsletter has been successfully created.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_entity_1.BlogEntity]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Newsletter ID' }),
    (0, swagger_1.ApiBody)({ type: blog_entity_1.BlogEntity, description: 'Updated newsletter object' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The newsletter has been successfully updated.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, blog_entity_1.BlogEntity]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Newsletter ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The newsletter has been successfully deleted.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('upload-image/:blogId'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
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
    __param(0, (0, common_1.Param)('blogId')),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [new common_1.FileTypeValidator({ fileType: 'image/jpeg' }), new common_1.FileTypeValidator({ fileType: 'image/png' })],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "uploadPDF", null);
exports.BlogController = BlogController = __decorate([
    (0, swagger_1.ApiTags)('blog'),
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService,
        auth_service_1.AuthService])
], BlogController);
//# sourceMappingURL=blog.controller.js.map