/// <reference types="multer" />
import { ValidationError } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthEntity } from './auth.entity';
import { AuthCredentialsDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAllAuth(queryParams: any): Promise<AuthEntity[]>;
    login(body: AuthCredentialsDto): Promise<{
        token: any;
        message?: undefined;
    } | {
        message: string;
        token?: undefined;
    }>;
    register(createUserDto: AuthCredentialsDto): Promise<AuthEntity | ValidationError[]>;
    updateClient(id: number, authData: Partial<AuthEntity>): Promise<AuthEntity | ValidationError[]>;
    deleteClient(id: number): Promise<AuthEntity>;
    uploadPDF(authId: number, file: Express.Multer.File): Promise<{
        success: boolean;
        filePath: string;
        fileName: string;
    }>;
}
