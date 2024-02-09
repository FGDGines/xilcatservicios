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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_entity_1 = require("./auth.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const fs_1 = require("fs");
const path_1 = require("path");
let AuthService = class AuthService {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    async update(id, authData) {
        try {
            await this.authRepository.update(id, authData);
            return await this.authRepository.findOne({ where: { id } });
        }
        catch (error) {
            return error;
        }
    }
    async register(createUserDto) {
        const { username, password } = createUserDto;
        try {
            const adminExists = await this.isAdminExists();
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = this.authRepository.create({
                username,
                password: hashedPassword,
                rol: !adminExists ? 'ADMINISTRATOR' : 'CLIENT',
            });
            return await this.authRepository.save(newUser);
        }
        catch (error) {
            return error;
        }
    }
    async validateUser(username, password) {
        const user = await this.authRepository.findOne({ where: { username } });
        if (user && (await this.comparePassword(password, user.password))) {
            return user;
        }
        return null;
    }
    async comparePassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
    async validateAuthEntity(authId) {
        const authEntity = await this.authRepository.findOne({
            where: { id: authId },
        });
        return !!authEntity;
    }
    async isAdminExists() {
        const adminCount = await this.authRepository.count({
            where: { rol: 'ADMINISTRATOR' },
        });
        return adminCount > 0;
    }
    async delete(id) {
        try {
            const authToRemove = await this.authRepository.findOne({
                where: { id },
            });
            return await this.authRepository.remove(authToRemove);
        }
        catch (error) {
            throw new common_1.BadRequestException('El ID de AuthEntity proporcionado no existe');
        }
    }
    async findAll(page, limit, online, activo) {
        try {
            const parsedOnline = online === 'true' ? true : online === 'false' ? false : undefined;
            const parsedActivo = activo === 'true' ? true : activo === 'false' ? false : undefined;
            const query = this.authRepository
                .createQueryBuilder('auth')
                .select([
                'auth.id',
                'auth.username',
                'auth.rol',
                'auth.online',
                'auth.activo',
                'auth.created_at',
                'auth.updated_at',
                'auth.imagePath',
            ])
                .skip((page - 1) * limit)
                .take(limit);
            if (parsedOnline !== undefined) {
                query.andWhere('auth.online = :online', {
                    online: parsedOnline,
                });
            }
            if (parsedActivo !== undefined) {
                query.andWhere('auth.activo = :activo', {
                    activo: parsedActivo,
                });
            }
            const clients = await query.getMany();
            return clients;
        }
        catch (error) {
            throw error;
        }
    }
    async handleFileUpload(file, authId) {
        try {
            console.log(authId);
            const auth = await this.authRepository.findOne({
                where: { id: authId },
            });
            if (!auth) {
                throw new common_1.BadRequestException('El ID de Auth proporcionado no existe: ' + authId);
            }
            const folderPath = `./public/auth/${auth.id}`;
            const uniqueSuffix = `${Date.now()}`;
            const extension = (0, path_1.extname)(file.originalname);
            if (!(0, fs_1.existsSync)(folderPath)) {
                (0, fs_1.mkdirSync)(folderPath, { recursive: true });
            }
            const fileName = `${uniqueSuffix}${extension}`;
            const filePath = `${folderPath}/${fileName}`;
            (0, fs_1.writeFileSync)(filePath, file.buffer);
            await this.authRepository.update(authId, { imagePath: filePath });
            return {
                success: true,
                filePath,
                fileName,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException({
                success: false,
                message: error.message || 'Ha ocurrido un error al manejar el archivo.',
            });
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auth_entity_1.AuthEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map