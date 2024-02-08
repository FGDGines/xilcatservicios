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
exports.CollaboratorsDto = exports.DuesDto = exports.PdfDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PdfDto {
}
exports.PdfDto = PdfDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El typePdf es obligatorio' }),
    __metadata("design:type", String)
], PdfDto.prototype, "typePdf", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El path es obligatorio' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PdfDto.prototype, "path", void 0);
class DuesDto {
}
exports.DuesDto = DuesDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DuesDto.prototype, "dues", void 0);
class CollaboratorsDto {
}
exports.CollaboratorsDto = CollaboratorsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CollaboratorsDto.prototype, "collaborators", void 0);
//# sourceMappingURL=client.dto.js.map