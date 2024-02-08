"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookiesModule = void 0;
const common_1 = require("@nestjs/common");
const cookies_controller_1 = require("./cookies.controller");
const cookies_service_1 = require("./cookies.service");
const typeorm_1 = require("@nestjs/typeorm");
const cookies_entity_1 = require("./cookies.entity");
let CookiesModule = class CookiesModule {
};
exports.CookiesModule = CookiesModule;
exports.CookiesModule = CookiesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cookies_entity_1.CookieEntity])],
        controllers: [cookies_controller_1.CookiesController],
        providers: [cookies_service_1.CookiesService],
        exports: [cookies_service_1.CookiesService],
    })
], CookiesModule);
//# sourceMappingURL=cookies.module.js.map