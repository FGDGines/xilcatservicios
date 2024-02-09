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
exports.NewsletterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const newsletter_entity_1 = require("./newsletter.entity");
const class_validator_1 = require("class-validator");
let NewsletterService = class NewsletterService {
    constructor(newsletterRepository) {
        this.newsletterRepository = newsletterRepository;
    }
    async findAll(page, limit) {
        try {
            const clients = await this.newsletterRepository
                .createQueryBuilder('newsletter')
                .leftJoin('newsletter.auth', 'auth')
                .select([
                'newsletter.id',
                'newsletter.title',
                'newsletter.content',
                'newsletter.created_at',
                'newsletter.updated_at',
                'auth.id',
                'auth.username',
                'auth.imagePath',
                'auth.created_at',
                'auth.updated_at',
            ])
                .take(limit)
                .skip((page - 1) * limit)
                .getMany();
            return clients;
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        return await this.newsletterRepository.findOne({ where: { id } });
    }
    async create(newsletter) {
        try {
            const newNewsletter = this.newsletterRepository.create(newsletter);
            const errors = await (0, class_validator_1.validate)(newNewsletter);
            if (errors.length > 0) {
                return errors;
            }
            return await this.newsletterRepository.save(newNewsletter);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updatedNewsletter) {
        await this.newsletterRepository.update(id, updatedNewsletter);
        return await this.findById(id);
    }
    async delete(id) {
        const newsletterToDelete = await this.findById(id);
        await this.newsletterRepository.delete(id);
        return newsletterToDelete;
    }
};
exports.NewsletterService = NewsletterService;
exports.NewsletterService = NewsletterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(newsletter_entity_1.NewsletterEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NewsletterService);
//# sourceMappingURL=newsletter.service.js.map