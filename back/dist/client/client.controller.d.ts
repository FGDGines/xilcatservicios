/// <reference types="multer" />
import { ValidationError } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientEntity } from './client.entity';
import { AuthService } from 'src/auth/auth.service';
export declare class ClientController {
    private readonly clientService;
    private readonly authService;
    constructor(clientService: ClientService, authService: AuthService);
    getAllClients(queryParams: any): Promise<ClientEntity[]>;
    getClientById(id: number): Promise<ClientEntity>;
    createClient(clientData: ClientEntity): Promise<ClientEntity | ValidationError[]>;
    updateClient(id: number, clientData: Partial<ClientEntity>): Promise<ClientEntity | ValidationError[]>;
    deleteClient(id: number): Promise<ClientEntity>;
    uploadPDF(clientId: number, pdfType: string, pdf: Express.Multer.File): Promise<{
        success: boolean;
        filePath: string;
        fileName: string;
    }>;
}
