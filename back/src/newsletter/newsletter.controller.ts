import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ValidationError,
  UseInterceptors,
  FileTypeValidator,
  UploadedFile,
  ParseFilePipe,
  HttpException,
  HttpStatus,
  Query,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiConsumes,
  ApiQuery,
} from '@nestjs/swagger';
import { NewsletterService } from './newsletter.service';
import { NewsletterEntity } from 'src/newsletter/newsletter.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from 'src/auth/auth.service';

@ApiTags('newsletter')
@Controller('newsletter')
export class NewsletterController {
  constructor(
    private readonly newsletterService: NewsletterService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'OPERATIVO' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiResponse({ status: 200, description: 'Return all clients.' })
  async getAllClients(@Query() queryParams): Promise<NewsletterEntity[]> {
    const { page = 1, limit = 10 } = queryParams;
    return await this.newsletterService.findAll(page, limit);
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
        value: { title: 'Sample Title', content: 'Sample Content', auth: 0 },
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
  ): Promise<NewsletterEntity | ValidationError[]> {
    const authIdExists = await this.authService.validateAuthEntity(
      newsletter.auth as any,
    );
    if (!authIdExists) {
      throw new BadRequestException(
        'El ID de AuthEntity proporcionado no existe',
      );
    }
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

  // ARCHIVOS
  @Post('upload-image/:newsletterId')
  @ApiOperation({ summary: 'OPERATIVO' })
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload image file',
    type: 'multipart/form-data',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Update a client PDF.' })
  async uploadPDF(
    @Param('newsletterId') newsletterId: number,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/jpeg' })],
      }),
    )
    file: Express.Multer.File,
  ) {
    try {
      const { filePath, fileName } =
        await this.newsletterService.handleFileUpload(file, newsletterId);

      return { success: true, filePath, fileName };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
