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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthEntity = void 0;
const class_validator_1 = require("class-validator");
const client_entity_1 = require("../client/client.entity");
const typeorm_1 = require("typeorm");
const newsletter_entity_1 = require("../newsletter/newsletter.entity");
const chat_entity_1 = require("../chat/chat.entity");
let AuthEntity = class AuthEntity {
};
exports.AuthEntity = AuthEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AuthEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre de usuario es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre de usuario debe ser un texto' }),
    (0, class_validator_1.MinLength)(4, {
        message: 'El nombre de usuario debe tener al menos 4 caracteres',
    }),
    (0, class_validator_1.MaxLength)(20, {
        message: 'El nombre de usuario no puede tener más de 20 caracteres',
    }),
    __metadata("design:type", String)
], AuthEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'La contraseña es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La contraseña debe ser un texto' }),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    (0, class_validator_1.MaxLength)(30, {
        message: 'La contraseña no puede tener más de 30 caracteres',
    }),
    (0, class_validator_1.Matches)(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/, {
        message: 'La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial',
    }),
    __metadata("design:type", String)
], AuthEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'CLIENT' }),
    (0, class_validator_1.IsIn)(['ABOGADO', 'ADMINISTRADOR', 'ASESOR', 'CLIENT'], {
        message: 'El rol es invalido - ABOGADO, ADMINISTRADOR, ASESOR, CLIENT',
    }),
    __metadata("design:type", String)
], AuthEntity.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], AuthEntity.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], AuthEntity.prototype, "online", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AuthEntity.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], AuthEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], AuthEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => client_entity_1.ClientEntity, (client) => client.auth),
    __metadata("design:type", Array)
], AuthEntity.prototype, "clients", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => newsletter_entity_1.NewsletterEntity, (newsletter) => newsletter.auth),
    __metadata("design:type", Array)
], AuthEntity.prototype, "newsletters", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chat_entity_1.ChatEntity, (chat) => chat.auth),
    __metadata("design:type", Array)
], AuthEntity.prototype, "chats", void 0);
exports.AuthEntity = AuthEntity = __decorate([
    (0, typeorm_1.Entity)()
], AuthEntity);
//# sourceMappingURL=auth.entity.js.map