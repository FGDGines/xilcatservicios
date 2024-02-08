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
exports.JournalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const journal_entity_1 = require("./journal.entity");
const typeorm_2 = require("typeorm");
const class_validator_1 = require("class-validator");
let JournalService = class JournalService {
    constructor(journalRepository) {
        this.journalRepository = journalRepository;
    }
    async findAll(page, limit) {
        try {
            const journals = await this.journalRepository
                .createQueryBuilder('journal')
                .leftJoin('journal.auth', 'auth')
                .select([
                'journal.id',
                'journal.title',
                'journal.description',
                'journal.start',
                'journal.end',
                'auth.id',
                'auth.username',
                'auth.imagePath',
                'auth.created_at',
                'auth.updated_at',
            ])
                .take(limit)
                .skip((page - 1) * limit)
                .getMany();
            return journals;
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        return await this.journalRepository.findOne({ where: { id } });
    }
    async create(journal) {
        try {
            const newJournal = this.journalRepository.create(journal);
            const errors = await (0, class_validator_1.validate)(newJournal);
            if (errors.length > 0) {
                return errors;
            }
            return await this.journalRepository.save(newJournal);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updatedNewJournal) {
        await this.journalRepository.update(id, updatedNewJournal);
        return await this.findById(id);
    }
    async delete(id) {
        const journalToDelete = await this.findById(id);
        await this.journalRepository.delete(id);
        return journalToDelete;
    }
};
exports.JournalService = JournalService;
exports.JournalService = JournalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(journal_entity_1.JournalEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JournalService);
//# sourceMappingURL=journal.service.js.map