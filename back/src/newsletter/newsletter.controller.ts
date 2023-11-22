import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { NewsletterService } from './newsletter.service';
import { NewsletterEntity } from 'src/newsletter/newsletter.entity';

@ApiTags('newsletter')
@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Get()
  @ApiOperation({ summary: 'Get all newsletters' })
  @ApiResponse({ status: 200, description: 'Return all newsletters.' })
  async getAll(): Promise<NewsletterEntity[]> {
    return await this.newsletterService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get newsletter by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Newsletter ID' })
  @ApiResponse({ status: 200, description: 'Return a newsletter by ID.' })
  async getById(@Param('id') id: number): Promise<NewsletterEntity> {
    return await this.newsletterService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new newsletter' })
  @ApiBody({
    type: NewsletterEntity,
    description: 'New newsletter object',
    examples: {
      example1: {
        value: { title: 'Sample Title', content: 'Sample Content' },
        summary: 'Sample Newsletter Object',
      },
      // Agrega más ejemplos según sea necesario
    },
  })
  @ApiResponse({
    status: 201,
    description: 'The newsletter has been successfully created.',
  })
  async create(
    @Body() newsletter: NewsletterEntity,
  ): Promise<NewsletterEntity> {
    return await this.newsletterService.create(newsletter);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a newsletter by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Newsletter ID' })
  @ApiBody({ type: NewsletterEntity, description: 'Updated newsletter object' })
  @ApiResponse({
    status: 200,
    description: 'The newsletter has been successfully updated.',
  })
  async update(
    @Param('id') id: number,
    @Body() updatedNewsletter: NewsletterEntity,
  ): Promise<NewsletterEntity> {
    return await this.newsletterService.update(id, updatedNewsletter);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a newsletter by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Newsletter ID' })
  @ApiResponse({
    status: 200,
    description: 'The newsletter has been successfully deleted.',
  })
  async delete(@Param('id') id: number): Promise<NewsletterEntity> {
    return await this.newsletterService.delete(id);
  }
}
