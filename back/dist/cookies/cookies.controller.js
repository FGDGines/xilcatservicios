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
exports.CookiesController = void 0;
const common_1 = require("@nestjs/common");
const cookies_service_1 = require("./cookies.service");
const cookies_dto_1 = require("./cookies.dto");
const swagger_1 = require("@nestjs/swagger");
let CookiesController = class CookiesController {
    constructor(cookiesService) {
        this.cookiesService = cookiesService;
    }
    setCookie(res) {
        this.cookiesService.setCookie(res, 'accept-cookies', 'true', {});
        return 'Cookie establecida';
    }
    getCookie(req) {
        const cookieValue = this.cookiesService.getCookie(req, 'accept-cookies');
        return cookieValue
            ? `Valor de la cookie: ${cookieValue}`
            : 'Cookie no encontrada';
    }
    clearCookie(res) {
        this.cookiesService.clearCookie(res, 'accept-cookies');
        return 'Cookie eliminada';
    }
    async acceptCookies(body, res) {
        const { accepted } = body;
        try {
            if (accepted) {
                this.cookiesService.setCookie(res, 'accept-cookies', 'true', {
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                });
                res.status(200).json({ message: 'Cookies aceptadas correctamente' });
            }
            else {
                this.cookiesService.setCookie(res, 'accept-cookies', 'false', {});
                res.status(200).json({ message: 'Cookies no fueron aceptadas' });
            }
        }
        catch (error) {
            return res
                .status(500)
                .json({ error: 'Hubo un error al procesar la solicitud' });
        }
    }
    async Headers(res) {
        if (res.locals.showCookieBanner) {
            res.set('Show-Cookie-Banner', 'true');
        }
        else {
            res.set('Show-Cookie-Banner', 'false');
        }
        return 'Respuesta de tu controlador';
    }
    async PopUp(res) {
        if (res.locals.showCookieBanner) {
            return res.render('cookie-popup');
        }
        else {
            return 'Respuesta de tu controlador cuando no se muestra el banner';
        }
    }
};
exports.CookiesController = CookiesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CookiesController.prototype, "setCookie", null);
__decorate([
    (0, common_1.Get)('/get-cookie'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CookiesController.prototype, "getCookie", null);
__decorate([
    (0, common_1.Get)('/clear-cookie'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CookiesController.prototype, "clearCookie", null);
__decorate([
    (0, common_1.Post)('accept-cookies'),
    (0, swagger_1.ApiOperation)({ summary: 'OPERATIVO' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cookies_dto_1.AcceptCookiesDto, Object]),
    __metadata("design:returntype", Promise)
], CookiesController.prototype, "acceptCookies", null);
__decorate([
    (0, common_1.Get)('/pop-up'),
    (0, swagger_1.ApiOperation)({ summary: 'NO FUNCIONA' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CookiesController.prototype, "Headers", null);
__decorate([
    (0, common_1.Get)('/pop-up2'),
    (0, swagger_1.ApiOperation)({ summary: 'NO FUNCIONA' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CookiesController.prototype, "PopUp", null);
exports.CookiesController = CookiesController = __decorate([
    (0, swagger_1.ApiTags)('cookie'),
    (0, common_1.Controller)('cookies'),
    __metadata("design:paramtypes", [cookies_service_1.CookiesService])
], CookiesController);
//# sourceMappingURL=cookies.controller.js.map