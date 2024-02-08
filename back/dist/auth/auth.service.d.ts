/// <reference types="multer" />
import { ValidationError } from '@nestjs/common';
import { AuthEntity } from './auth.entity';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './auth.dto';
export declare class AuthService {
    private readonly authRepository;
    constructor(authRepository: Repository<AuthEntity>);
    update(id: number, authData: Partial<AuthEntity>): Promise<AuthEntity | undefined>;
    register(createUserDto: AuthCredentialsDto): Promise<AuthEntity | ValidationError[]>;
    validateUser(username: string, password: string): Promise<AuthEntity | null>;
    private comparePassword;
    validateAuthEntity(authId: number): Promise<boolean>;
    isAdminExists(): Promise<boolean>;
    delete(id: number): Promise<AuthEntity>;
    findAll(page: number, limit: number, online?: string, activo?: string): Promise<AuthEntity[]>;
    handleFileUpload(file: Express.Multer.File, authId: number): Promise<{
        success: boolean;
        filePath: string;
        fileName: string;
    }>;
}
