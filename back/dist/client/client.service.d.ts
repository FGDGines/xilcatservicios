/// <reference types="multer" />
import { ValidationError } from '@nestjs/common';
import { ClientEntity } from './client.entity';
import { Repository } from 'typeorm';
export declare class ClientService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<ClientEntity>);
    findAll(page: number, limit: number): Promise<ClientEntity[]>;
    findById(id: number): Promise<ClientEntity>;
    create(clientData: ClientEntity): Promise<ClientEntity | ValidationError[]>;
    update(id: number, clientData: Partial<ClientEntity>): Promise<ClientEntity | undefined>;
    delete(id: number): Promise<ClientEntity>;
    handleFileUpload(pdf: Express.Multer.File, clientId: number, pdfType: string): Promise<{
        success: boolean;
        filePath: string;
        fileName: string;
    }>;
}
