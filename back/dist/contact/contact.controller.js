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
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const contact_service_1 = require("./contact.service");
const contact_entity_1 = require("./contact.entity");
const swagger_1 = require("@nestjs/swagger");
let ContactController = class ContactController {
    constructor(contactService) {
        this.contactService = contactService;
    }
    async getAll() {
        return await this.contactService.findAll();
    }
    async getById(id) {
        return await this.contactService.findById(id);
    }
    async create(newsletter) {
        return await this.contactService.create(newsletter);
    }
    async update(id, updatedNewsletter) {
        return await this.contactService.update(id, updatedNewsletter);
    }
    async delete(id) {
        return await this.contactService.delete(id);
    }
};
exports.ContactController = ContactController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all contact' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all contact.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get contact by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'contact ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a contact by ID.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new contact' }),
    (0, swagger_1.ApiBody)({
        type: contact_entity_1.ContactEntity,
        description: 'New contact object',
        examples: {
            example1: {
                value: {
                    name: 'Sample Title',
                    email: 'Sample Content',
                    subject: 'a',
                    message: 'message',
                },
                summary: 'Sample contact Object',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The contact has been successfully created.',
    }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_entity_1.ContactEntity]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a contact by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'contact ID' }),
    (0, swagger_1.ApiBody)({ type: contact_entity_1.ContactEntity, description: 'Updated contact object' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The contact has been successfully updated.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, contact_entity_1.ContactEntity]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a contact by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'contact ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The contact has been successfully deleted.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "delete", null);
exports.ContactController = ContactController = __decorate([
    (0, swagger_1.ApiTags)('contact'),
    (0, common_1.Controller)('contact'),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactController);
//# sourceMappingURL=contact.controller.js.map