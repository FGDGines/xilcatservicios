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
exports.BlogEntity = void 0;
const class_validator_1 = require("class-validator");
const auth_entity_1 = require("../auth/auth.entity");
const typeorm_1 = require("typeorm");
let BlogEntity = class BlogEntity {
};
exports.BlogEntity = BlogEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El título no puede estar vacío' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El contenido no puede estar vacío' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], BlogEntity.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], BlogEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], BlogEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => auth_entity_1.AuthEntity, (auth) => auth.newsletters),
    (0, typeorm_1.JoinColumn)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El ID de AuthEntity debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'El ID de AuthEntity debe ser un número positivo' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID de AuthEntity es requerido' }),
    __metadata("design:type", auth_entity_1.AuthEntity)
], BlogEntity.prototype, "auth", void 0);
exports.BlogEntity = BlogEntity = __decorate([
    (0, typeorm_1.Entity)()
], BlogEntity);
//# sourceMappingURL=blog.entity.js.map