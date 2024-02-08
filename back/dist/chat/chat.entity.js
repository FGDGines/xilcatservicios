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
exports.ChatEntity = void 0;
const class_validator_1 = require("class-validator");
const auth_entity_1 = require("../auth/auth.entity");
const typeorm_1 = require("typeorm");
let ChatEntity = class ChatEntity {
};
exports.ChatEntity = ChatEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ChatEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El mensaje no puede ir vació' }),
    (0, class_validator_1.IsString)({ message: 'El nombre de usuario debe ser un texto' }),
    (0, class_validator_1.MaxLength)(20, {
        message: 'El nombre de usuario no puede tener más de 20 caracteres',
    }),
    __metadata("design:type", String)
], ChatEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ChatEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], ChatEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => auth_entity_1.AuthEntity, (auth) => auth.chats),
    (0, typeorm_1.JoinColumn)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El ID de AuthEntity debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'El ID de AuthEntity debe ser un número positivo' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID de AuthEntity es requerido' }),
    __metadata("design:type", auth_entity_1.AuthEntity)
], ChatEntity.prototype, "auth", void 0);
exports.ChatEntity = ChatEntity = __decorate([
    (0, typeorm_1.Entity)()
], ChatEntity);
//# sourceMappingURL=chat.entity.js.map