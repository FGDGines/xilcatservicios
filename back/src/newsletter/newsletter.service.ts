import { Injectable, ValidationError } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsletterEntity } from 'src/newsletter/newsletter.entity';
import { validate } from 'class-validator';

@Injectable()
export class NewsletterService {
  constructor(
    @InjectRepository(NewsletterEntity)
    private readonly newsletterRepository: Repository<NewsletterEntity>,
  ) {}

  async findAll(): Promise<NewsletterEntity[]> {
    return await this.newsletterRepository.find();
  }

  async findById(id: number): Promise<NewsletterEntity | undefined> {
    return await this.newsletterRepository.findOne({ where: { id } });
  }

  async create(
    newsletter: NewsletterEntity,
  ): Promise<NewsletterEntity | ValidationError[]> {
    const form = new NewsletterEntity();
    form.title = newsletter.title;
    form.content = newsletter.content;
    const errors = await validate(form);

    if (errors.length > 0) {
      return errors;
    }

    return await this.newsletterRepository.save(form);
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
}
