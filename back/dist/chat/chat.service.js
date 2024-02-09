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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chat_entity_1 = require("./chat.entity");
const typeorm_2 = require("typeorm");
const class_validator_1 = require("class-validator");
const auth_service_1 = require("../auth/auth.service");
let ChatService = class ChatService {
    constructor(chatRepository, authService) {
        this.chatRepository = chatRepository;
        this.authService = authService;
    }
    async createChat(chat) {
        try {
            const newClient = this.chatRepository.create(chat);
            const errors = await (0, class_validator_1.validate)(newClient);
            if (errors.length > 0) {
                return errors;
            }
            return await this.chatRepository.save(newClient);
        }
        catch (error) {
            return error;
        }
    }
    async getAuthAll() {
        console.log('getAuthAll -------------------');
        return await this.authService.findAll(0, 0);
    }
    async findAll(page, limit) {
        console.log('findAll ----------------------');
        try {
            const chats = await this.chatRepository
                .createQueryBuilder('chat')
                .leftJoin('chat.auth', 'auth')
                .select([
                'chat.id',
                'chat.message',
                'chat.created_at',
                'chat.updated_at',
                'auth.id',
                'auth.username',
                'auth.created_at',
                'auth.updated_at',
            ])
                .orderBy('chat.created_at', 'ASC')
                .take(limit)
                .skip((page - 1) * limit)
                .getMany();
            return chats;
        }
        catch (error) {
            throw error;
        }
    }
    findOne(id) {
        return `This action returns a #${id} chat`;
    }
    remove(id) {
        return `This action removes a #${id} chat`;
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chat_entity_1.ChatEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], ChatService);
//# sourceMappingURL=chat.service.js.map