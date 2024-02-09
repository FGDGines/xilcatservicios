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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blog_entity_1 = require("./blog.entity");
const typeorm_2 = require("typeorm");
const class_validator_1 = require("class-validator");
const path_1 = require("path");
const fs_1 = require("fs");
let BlogService = class BlogService {
    constructor(blogRepository) {
        this.blogRepository = blogRepository;
    }
    async findAll(page, limit) {
        try {
            const clients = await this.blogRepository
                .createQueryBuilder('blog')
                .leftJoin('blog.auth', 'auth')
                .select([
                'blog.id',
                'blog.title',
                'blog.content',
                'blog.imagePath',
                'blog.created_at',
                'blog.updated_at',
                'auth.id',
                'auth.username',
                'auth.imagePath',
                'auth.created_at',
                'auth.updated_at',
            ])
                .take(limit)
                .skip((page - 1) * limit)
                .getMany();
            return clients;
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        return await this.blogRepository.findOne({ where: { id } });
    }
    async create(newsletter) {
        try {
            const newNewsletter = this.blogRepository.create(newsletter);
            const errors = await (0, class_validator_1.validate)(newNewsletter);
            if (errors.length > 0) {
                return errors;
            }
            return await this.blogRepository.save(newNewsletter);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updatedNewsletter) {
        await this.blogRepository.update(id, updatedNewsletter);
        return await this.findById(id);
    }
    async delete(id) {
        const newsletterToDelete = await this.findById(id);
        await this.blogRepository.delete(id);
        return newsletterToDelete;
    }
    async handleFileUpload(file, blogId) {
        try {
            const newsletter = await this.blogRepository.findOne({
                where: { id: blogId },
            });
            if (!newsletter) {
                throw new common_1.BadRequestException('El ID de Blog proporcionado no existe: ' + blogId);
            }
            const folderPath = `./public/blog/${newsletter.id}`;
            const uniqueSuffix = `${Date.now()}`;
            const extension = (0, path_1.extname)(file.originalname);
            if (!(0, fs_1.existsSync)(folderPath)) {
                (0, fs_1.mkdirSync)(folderPath, { recursive: true });
            }
            const fileName = `${uniqueSuffix}${extension}`;
            const filePath = `${folderPath}/${fileName}`;
            (0, fs_1.writeFileSync)(filePath, file.buffer);
            await this.blogRepository.update(blogId, {
                imagePath: filePath,
            });
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
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_entity_1.BlogEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BlogService);
//# sourceMappingURL=blog.service.js.map