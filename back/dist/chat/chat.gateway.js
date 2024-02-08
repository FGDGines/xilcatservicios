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
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const chat_service_1 = require("./chat.service");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const auth_service_1 = require("../auth/auth.service");
const chat_entity_1 = require("./chat.entity");
let ChatGateway = class ChatGateway {
    constructor(chatService, authService) {
        this.chatService = chatService;
        this.authService = authService;
        this.server = new socket_io_1.Server({
            cors: {
                origin: true,
                credentials: true,
            },
        });
    }
    onModuleInit() {
        this.server.on('connection', async (socket) => {
            console.log('is Conecting');
            try {
                const { authId } = socket.handshake.auth;
                if (!authId) {
                    socket.disconnect();
                    return;
                }
                await this.authService.update(authId, { online: true });
                this.server.emit('on-auth-change', await this.chatService.getAuthAll());
                this.server.emit('on-message', await this.chatService.findAll(1, 0));
                socket.on('disconnect', async () => {
                    await this.authService.update(authId, { online: false });
                    this.server.emit('on-auth-change', this.chatService.getAuthAll());
                });
            }
            catch (error) {
                socket.emit('error-message', {
                    message: 'Se ha producido un error.',
                    error,
                });
                console.log(error);
            }
        });
    }
    async handleMessage(chat) {
        try {
            await this.chatService.createChat(chat);
            this.server.emit('on-message', await this.chatService.findAll(1, 0));
            if (!chat) {
                return;
            }
        }
        catch (error) {
            this.server.emit('error-message', {
                message: 'Se ha producido un error.',
                error,
            });
            console.log(error);
            return error;
        }
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('send-message'),
    __param(0, (0, websockets_1.MessageBody)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chat_entity_1.ChatEntity]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessage", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        auth_service_1.AuthService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map