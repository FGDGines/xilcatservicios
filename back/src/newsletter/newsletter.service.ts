import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsletterEntity } from 'src/newsletter/newsletter.entity';

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

  async create(newsletter: NewsletterEntity): Promise<NewsletterEntity> {
    return await this.newsletterRepository.save(newsletter);
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
