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
exports.AuthExists = exports.AuthExistsConstraint = void 0;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const auth_entity_1 = require("./auth.entity");
let AuthExistsConstraint = class AuthExistsConstraint {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    async validate(authId) {
        if (!authId) {
            return false;
        }
        const authExists = await this.authRepository.findOne({
            where: { id: authId },
        });
        return !!authExists;
    }
};
exports.AuthExistsConstraint = AuthExistsConstraint;
exports.AuthExistsConstraint = AuthExistsConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(auth_entity_1.AuthEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AuthExistsConstraint);
function AuthExists(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: AuthExistsConstraint,
        });
    };
}
exports.AuthExists = AuthExists;
//# sourceMappingURL=auth.validator.js.map