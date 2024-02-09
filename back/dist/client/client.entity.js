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
exports.ClientEntity = exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
let ClientController = class ClientController {
};
exports.ClientController = ClientController;
exports.ClientController = ClientController = __decorate([
    (0, common_1.Controller)('client')
], ClientController);
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const auth_entity_1 = require("../auth/auth.entity");
const client_dto_1 = require("./client.dto");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
let ClientEntity = class ClientEntity {
    constructor() {
        this.dues = 'null';
    }
};
exports.ClientEntity = ClientEntity;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClientEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser un texto' }),
    __metadata("design:type", String)
], ClientEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsEmail)({}, { message: 'El formato del correo electrónico es inválido' }),
    __metadata("design:type", String)
], ClientEntity.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'La dirección es obligatoria' }),
    (0, class_validator_1.MinLength)(5, { message: 'La dirección debe tener al menos 5 caracteres' }),
    __metadata("design:type", String)
], ClientEntity.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El teléfono principal es obligatorio' }),
    (0, class_validator_1.Matches)(/^(\+(34)\s?)?\d{9}$|^(\+(1)\s?)?\d{10}$/, {
        message: 'Por favor, introduce un número de teléfono válido de España (+34XXXXXXXXX) o Estados Unidos (+1XXXXXXXXXX)',
        context: '',
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "mainPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^(\+(34)\s?)?\d{9}$|^(\+(1)\s?)?\d{10}$/, {
        message: 'Por favor, introduce un número de teléfono válido de España (+34XXXXXXXXX) o Estados Unidos (+1XXXXXXXXXX)',
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "secondaryPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ClientEntity.prototype, "priceQuote", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ClientEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, swagger_1.ApiProperty)({ type: [client_dto_1.PdfDto] }),
    (0, class_transformer_1.Type)(() => client_dto_1.PdfDto),
    __metadata("design:type", Array)
], ClientEntity.prototype, "pdf", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    (0, swagger_1.ApiProperty)({ type: client_dto_1.DuesDto }),
    (0, class_transformer_1.Type)(() => client_dto_1.DuesDto),
    __metadata("design:type", String)
], ClientEntity.prototype, "dues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    (0, swagger_1.ApiProperty)({ type: client_dto_1.CollaboratorsDto }),
    (0, class_transformer_1.Type)(() => client_dto_1.CollaboratorsDto),
    __metadata("design:type", String)
], ClientEntity.prototype, "collaborators", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: 'TYPE1' }),
    (0, class_validator_1.IsIn)(['TYPE1', 'TYPE2', 'TYPE3', 'TYPE4'], {
        message: `El tipo de trámite es inválido - 'TYPE1', 'TYPE2', 'TYPE3', 'TYPE4'`,
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "tramiteType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: 'PENDING' }),
    (0, class_validator_1.IsIn)(['PENDING', 'PAID', 'NONE'], {
        message: 'El estado de pago es inválido - PENDING, PAID, NONE',
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ClientEntity.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], ClientEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => auth_entity_1.AuthEntity, (auth) => auth.clients),
    (0, typeorm_1.JoinColumn)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El ID de AuthEntity debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'El ID de AuthEntity debe ser un número positivo' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID de AuthEntity es requerido' }),
    __metadata("design:type", auth_entity_1.AuthEntity)
], ClientEntity.prototype, "auth", void 0);
exports.ClientEntity = ClientEntity = __decorate([
    (0, typeorm_1.Entity)()
], ClientEntity);
//# sourceMappingURL=client.entity.js.map