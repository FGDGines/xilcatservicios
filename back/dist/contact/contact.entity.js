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
exports.ContactEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let ContactEntity = class ContactEntity {
};
exports.ContactEntity = ContactEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ContactEntity.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no puede estar vacío' }),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9]+$/, {
        message: 'El nombre solo puede contener letras y números',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ContactEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El correo no puede estar vacío' }),
    (0, class_validator_1.IsEmail)({}, { message: 'El formato del correo electrónico es inválido' }),
    __metadata("design:type", String)
], ContactEntity.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El asunto no puede estar vacío' }),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9]+$/, {
        message: 'El asunto solo puede contener letras y números',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ContactEntity.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El mensaje no puede estar vacío' }),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9]+$/, {
        message: 'El mensaje solo puede contener letras y números',
    }),
    (0, typeorm_1.Column)({ length: 1 }),
    __metadata("design:type", String)
], ContactEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ContactEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], ContactEntity.prototype, "updated_at", void 0);
exports.ContactEntity = ContactEntity = __decorate([
    (0, typeorm_1.Entity)()
], ContactEntity);
//# sourceMappingURL=contact.entity.js.map