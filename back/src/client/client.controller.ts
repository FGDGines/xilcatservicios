import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Query,
  UploadedFile,
  // UploadedFiles,
  UseInterceptors,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientEntity } from './client.entity';
import {
  ApiBody,
  ApiConsumes,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  // FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { AuthService } from 'src/auth/auth.service';

@ApiTags('client')
@Controller('client')
export class ClientController {
  constructor(
    private readonly clientService: ClientService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiResponse({ status: 200, description: 'Return all clients.' })
  async getAllClients(@Query() queryParams): Promise<ClientEntity[]> {
    const { page = 1, limit = 10 } = queryParams;
    return await this.clientService.findAll(page, limit);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Client ID', type: Number })
  @ApiResponse({ status: 200, description: 'Return a specific client.' })
  async getClientById(@Param('id') id: number): Promise<ClientEntity> {
    try {
      const client = await this.clientService.findById(id);
      return client;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  @ApiBody({
    type: ClientEntity,
    description: 'Client creation example',
    examples: {
      example1: {
        value: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          address: '123 Main St',
          mainPhone: '+34123456789',
          priceQuote: 100,
          price: 150,
          auth: 5,
          pdf: [
            { typePdf: '', path: '' },
            { typePdf: '', path: '' },
          ],
          tramiteType: 'TYPE1',
          paymentStatus: 'PENDING',
        },
        summary: 'Sample client Object',
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Create a new client.' })
  async createClient(
    @Body(new ValidationPipe()) clientData: ClientEntity,
  ): Promise<ClientEntity | ValidationError[]> {
    const authIdExists = await this.authService.validateAuthEntity(
      clientData.auth as any,
    );
    if (!authIdExists) {
      throw new BadRequestException(
        'El ID de AuthEntity proporcionado no existe',
      );
    }
    return await this.clientService.create(clientData);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'Client ID', type: Number })
  @ApiBody({ type: ClientEntity })
  @ApiResponse({ status: 200, description: 'Update a client.' })
  async updateClient(
    @Param('id') id: number,
    @Body() clientData: Partial<ClientEntity>,
  ): Promise<ClientEntity | ValidationError[]> {
    return await this.clientService.update(id, clientData);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Client ID', type: Number })
  @ApiResponse({ status: 200, description: 'Delete a client.' })
  async deleteClient(@Param('id') id: number): Promise<ClientEntity> {
    return await this.clientService.delete(id);
  }

  // ARCHIVOS
  @Post('upload-pdf/:clientId/:pdfType')
  @UseInterceptors(FileInterceptor('pdf'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload PDF file',
    type: 'multipart/form-data',
    schema: {
      type: 'object',
      properties: {
        pdf: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Update a client PDF.' })
  async uploadPDF(
    @Param('clientId') clientId: number,
    @Param('pdfType') pdfType: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'pdf' })],
      }),
    )
    pdf: Express.Multer.File,
  ) {
    try {
      const { filePath, fileName } = await this.clientService.handleFileUpload(
        pdf,
        clientId,
        pdfType,
      );

      return { success: true, filePath, fileName };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload PDF file',
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
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/jpeg' })],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);
  }
  // Por ejemplo, para guardar la ruta en la entidad ClientEntity
  // const client = await this.clientService.findById(clientId);

  // if (client) {
  //   // Actualiza el campo 'pdf' de la entidad para almacenar objetos con typePdf y path
  //   if (!client.pdf) {
  //     client.pdf = []; // Inicializa la lista si está vacía
  //   }

  //   client.pdf.push({ typePdf: pdfType, path: pdfPath });
  //   // await client.save();
  // }

  // @Post('upload-pdfs')
  // @UseInterceptors(
  //   FileFieldsInterceptor([
  //     { name: 'pdfs', maxCount: 6 }, // Nombre del campo y cantidad máxima de archivos
  //   ]),
  // )
  // async uploadPDFs(
  //   @UploadedFiles() files,
  //   @Query('clientId') clientId: number,
  // ) {
  //   return await this.clientService.uploadPDF(files.pdfs, clientId);
  // }

  // @Post('upload-pdfa')
  // @UseInterceptors(
  //   FileInterceptor('pdfs', {
  //     storage: diskStorage({
  //       destination: './public',
  //       filename: (req, file, callback) => {
  //         // Lógica para nombrar los archivos, puedes personalizarlo según tus necesidades
  //         const uniqueSuffix = `${Date.now()}-${Math.round(
  //           Math.random() * 1e9,
  //         )}`;
  //         callback(
  //           null,
  //           `${file.fieldname}-${uniqueSuffix}-${file.originalname}`,
  //         );
  //       },
  //     }),
  //     limits: {
  //       fileSize: 1024 * 1024 * 5, // Tamaño máximo del archivo (en bytes), ajusta según necesites
  //       files: 6, // Máximo número de archivos permitidos
  //     },
  //   }),
  // )
  // async uploadPDFA(
  //   @UploadedFiles() files,
  //   @Query('clientId') clientId: number,
  // ) {
  //   return await this.clientService.uploadPDF(files, clientId);
  // }
}
