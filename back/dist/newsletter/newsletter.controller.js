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
exports.NewsletterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const newsletter_service_1 = require("./newsletter.service");
const newsletter_entity_1 = require("./newsletter.entity");
const auth_service_1 = require("../auth/auth.service");
let NewsletterController = class NewsletterController {
    constructor(newsletterService, authService) {
        this.newsletterService = newsletterService;
        this.authService = authService;
    }
    async getAllClients(queryParams) {
        const { page = 1, limit = 10 } = queryParams;
        return await this.newsletterService.findAll(page, limit);
    }
    async getById(id) {
        return await this.newsletterService.findById(id);
    }
    async create(newsletter) {
        const authIdExists = await this.authService.validateAuthEntity(newsletter.auth);
        if (!authIdExists) {
            throw new common_1.BadRequestException('El ID de AuthEntity proporcionado no existe');
        }
        return await this.newsletterService.create(newsletter);
    }
    async update(id, updatedNewsletter) {
        return await this.newsletterService.update(id, updatedNewsletter);
    }
    async delete(id) {
        return await this.newsletterService.delete(id);
    }
};
exports.NewsletterController = NewsletterController;
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
], NewsletterController.prototype, "getAllClients", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get newsletter by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Newsletter ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a newsletter by ID.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NewsletterController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new newsletter' }),
    (0, swagger_1.ApiBody)({
        type: newsletter_entity_1.NewsletterEntity,
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
    __metadata("design:paramtypes", [newsletter_entity_1.NewsletterEntity]),
    __metadata("design:returntype", Promise)
], NewsletterController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a newsletter by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Newsletter ID' }),
    (0, swagger_1.ApiBody)({ type: newsletter_entity_1.NewsletterEntity, description: 'Updated newsletter object' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The newsletter has been successfully updated.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, newsletter_entity_1.NewsletterEntity]),
    __metadata("design:returntype", Promise)
], NewsletterController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a newsletter by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Newsletter ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The newsletter has been successfully deleted.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NewsletterController.prototype, "delete", null);
exports.NewsletterController = NewsletterController = __decorate([
    (0, swagger_1.ApiTags)('newsletter'),
    (0, common_1.Controller)('newsletter'),
    __metadata("design:paramtypes", [newsletter_service_1.NewsletterService,
        auth_service_1.AuthService])
], NewsletterController);
//# sourceMappingURL=newsletter.controller.js.map