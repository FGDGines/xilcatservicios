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
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const contact_entity_1 = require("./contact.entity");
const typeorm_2 = require("typeorm");
const class_validator_1 = require("class-validator");
let ContactService = class ContactService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async findAll() {
        try {
            return await this.contactRepository.find();
        }
        catch (error) {
            return error;
        }
    }
    async findById(id) {
        return await this.contactRepository.findOne({ where: { id } });
    }
    async create(contact) {
        try {
            const form = new contact_entity_1.ContactEntity();
            form.name = contact.name;
            form.subject = contact.subject;
            form.message = contact.message;
            form.email = contact.email;
            const errors = await (0, class_validator_1.validate)(form);
            if (errors.length > 0) {
                return errors;
            }
            return await this.contactRepository.save(form);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updatedNewsletter) {
        try {
            await this.contactRepository.update(id, updatedNewsletter);
            return await this.findById(id);
        }
        catch (error) {
            return error;
        }
    }
    async delete(id) {
        try {
            const newsletterToDelete = await this.findById(id);
            await this.contactRepository.delete(id);
            return newsletterToDelete;
        }
        catch (error) {
            return error;
        }
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contact_entity_1.ContactEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContactService);
//# sourceMappingURL=contact.service.js.map