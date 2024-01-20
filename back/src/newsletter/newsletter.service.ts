import {
  BadRequestException,
  Injectable,
  ValidationError,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsletterEntity } from 'src/newsletter/newsletter.entity';
import { validate } from 'class-validator';
import { extname } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

@Injectable()
export class NewsletterService {
  constructor(
    @InjectRepository(NewsletterEntity)
    private readonly newsletterRepository: Repository<NewsletterEntity>,
  ) {}

  async findAll(page: number, limit: number): Promise<NewsletterEntity[]> {
    try {
      const clients = await this.newsletterRepository
        .createQueryBuilder('newsletter')
        .leftJoin('newsletter.auth', 'auth')
        .select([
          'newsletter.id',
          'newsletter.title',
          'newsletter.content',
          'newsletter.imagePath',
          'newsletter.created_at',
          'newsletter.updated_at',
          // Seleccionando todos los campos de 'auth' excepto 'password'
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
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<NewsletterEntity | undefined> {
    return await this.newsletterRepository.findOne({ where: { id } });
  }

  async create(
    newsletter: NewsletterEntity,
  ): Promise<NewsletterEntity | ValidationError[]> {
    try {
      const newNewsletter = this.newsletterRepository.create(newsletter);

      const errors = await validate(newNewsletter);

      if (errors.length > 0) {
        return errors;
      }

      return await this.newsletterRepository.save(newNewsletter);
    } catch (error) {
      return error;
    }
  }

  async update(
    id: number,
    updatedNewsletter: NewsletterEntity,
  ): Promise<NewsletterEntity> {
    await this.newsletterRepository.update(id, updatedNewsletter);
    return await this.findById(id);
  }

  async delete(id: number): Promise<NewsletterEntity> {
    const newsletterToDelete = await this.findById(id);
    await this.newsletterRepository.delete(id);
    return newsletterToDelete;
  }

  async handleFileUpload(file: Express.Multer.File, newsletterId: number) {
    try {
      const newsletter = await this.newsletterRepository.findOne({
        where: { id: newsletterId },
      });

      if (!newsletter) {
        throw new BadRequestException(
          'El ID de Auth proporcionado no existe: ' + newsletterId,
        );
      }

      const folderPath = `./public/newsletter/${newsletter.id}`;
      const uniqueSuffix = `${Date.now()}`;
      const extension = extname(file.originalname);

      if (!existsSync(folderPath)) {
        mkdirSync(folderPath, { recursive: true });
      }

      const fileName = `${uniqueSuffix}${extension}`;
      const filePath = `${folderPath}/${fileName}`;

      writeFileSync(filePath, file.buffer);

      await this.newsletterRepository.update(newsletterId, {
        imagePath: filePath,
      });

      return {
        success: true,
        filePath,
        fileName,
      };
    } catch (error) {
      throw new BadRequestException({
        success: false,
        message: error.message || 'Ha ocurrido un error al manejar el archivo.',
      });
    }
  }
}
