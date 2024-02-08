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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("./client.entity");
const typeorm_2 = require("typeorm");
const class_validator_1 = require("class-validator");
const fs_1 = require("fs");
const path_1 = require("path");
let ClientService = class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async findAll(page, limit) {
        try {
            const clients = await this.clientRepository
                .createQueryBuilder('client')
                .leftJoin('client.auth', 'auth')
                .select([
                'client.id',
                'client.name',
                'client.email',
                'client.address',
                'client.mainPhone',
                'client.secondaryPhone',
                'client.priceQuote',
                'client.price',
                'client.pdf',
                'client.tramiteType',
                'client.paymentStatus',
                'client.created_at',
                'client.updated_at',
                'client.dues',
                'auth.id',
                'auth.username',
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
        try {
            const client = await this.clientRepository
                .createQueryBuilder('client')
                .leftJoin('client.auth', 'auth')
                .select([
                'client.id',
                'client.name',
                'client.email',
                'client.address',
                'client.mainPhone',
                'client.secondaryPhone',
                'client.priceQuote',
                'client.price',
                'client.pdf',
                'client.tramiteType',
                'client.paymentStatus',
                'client.created_at',
                'client.updated_at',
                'client.dues',
                'client.collaborators',
                'auth.id',
                'auth.username',
                'auth.created_at',
                'auth.updated_at',
            ])
                .where('client.id = :id', { id })
                .getOne();
            if (!client) {
                throw new Error(`No se encontró ningún cliente con el ID: ${id}`);
            }
            return client;
        }
        catch (error) {
            throw new Error(`Error al buscar el cliente: ${error.message}`);
        }
    }
    async create(clientData) {
        try {
            const newClient = this.clientRepository.create(clientData);
            const errors = await (0, class_validator_1.validate)(newClient);
            if (errors.length > 0) {
                return errors;
            }
            return await this.clientRepository.save(newClient);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, clientData) {
        try {
            await this.clientRepository.update(id, clientData);
            return await this.clientRepository.findOne({ where: { id } });
        }
        catch (error) {
            return error;
        }
    }
    async delete(id) {
        try {
            const clientToRemove = await this.clientRepository.findOne({
                where: { id: id },
            });
            return await this.clientRepository.remove(clientToRemove);
        }
        catch (error) {
            throw new common_1.BadRequestException('El ID de ClientEntity proporcionado no existe');
        }
    }
    async handleFileUpload(pdf, clientId, pdfType) {
        try {
            const client = await this.clientRepository.findOne({
                where: { id: clientId },
            });
            if (!client) {
                throw new common_1.BadRequestException('El ID de ClientEntity proporcionado no existe: ' + clientId);
            }
            const folderPath = `./public/clients/${clientId}`;
            const uniqueSuffix = `${Date.now()}-${pdfType}`;
            const extension = (0, path_1.extname)(pdf.originalname);
            if (!(0, fs_1.existsSync)(folderPath)) {
                (0, fs_1.mkdirSync)(folderPath, { recursive: true });
            }
            const fileName = `${uniqueSuffix}${extension}`;
            const filePath = `${folderPath}/${fileName}`;
            (0, fs_1.writeFileSync)(filePath, pdf.buffer);
            if (client) {
                if (!client.pdf) {
                    client.pdf = [];
                }
                const newPdf = Array.isArray(client.pdf) ? client.pdf : JSON.parse(String(client.pdf));
                newPdf.push(({ typePdf: pdfType, path: filePath }));
                await this.clientRepository.update(clientId, { pdf: newPdf });
            }
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
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.ClientEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientService);
//# sourceMappingURL=client.service.js.map