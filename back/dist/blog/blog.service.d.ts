/// <reference types="multer" />
import { ValidationError } from '@nestjs/common';
import { BlogEntity } from './blog.entity';
import { Repository } from 'typeorm';
export declare class BlogService {
    private readonly blogRepository;
    constructor(blogRepository: Repository<BlogEntity>);
    findAll(page: number, limit: number): Promise<BlogEntity[]>;
    findById(id: number): Promise<BlogEntity | undefined>;
    create(newsletter: BlogEntity): Promise<BlogEntity | ValidationError[]>;
    update(id: number, updatedNewsletter: BlogEntity): Promise<BlogEntity>;
    delete(id: number): Promise<BlogEntity>;
    handleFileUpload(file: Express.Multer.File, blogId: number): Promise<{
        success: boolean;
        filePath: string;
        fileName: string;
    }>;
}
