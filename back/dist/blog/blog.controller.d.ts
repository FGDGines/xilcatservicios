/// <reference types="multer" />
import { ValidationError, StreamableFile } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { BlogService } from './blog.service';
import { BlogEntity } from './blog.entity';
export declare class BlogController {
    private readonly blogService;
    private readonly authService;
    constructor(blogService: BlogService, authService: AuthService);
    getAllClients(queryParams: any): Promise<BlogEntity[]>;
    getById(id: number): Promise<BlogEntity>;
    getPicture(id: string, name: string): Promise<StreamableFile>;
    create(newsletter: BlogEntity): Promise<BlogEntity | ValidationError[]>;
    update(id: number, updatedNewsletter: BlogEntity): Promise<BlogEntity>;
    delete(id: number): Promise<BlogEntity>;
    uploadPDF(blogId: number, file: Express.Multer.File): Promise<{
        success: boolean;
        filePath: string;
        fileName: string;
    }>;
}
