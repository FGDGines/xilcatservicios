import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
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
import { diskStorage } from 'multer';
import { extname } from 'path';
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
          mainPhone: '123-456-7890',
          priceQuote: 100,
          price: 150,
          auth: 2,
          pdf: ['url1', 'url2'],
          tramiteType: 'Asylum',
          paymentStatus: 'Pending',
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
  @Post('upload-pdf')
  @UseInterceptors(
    FileInterceptor('pdf', {
      storage: diskStorage({
        destination: './public',
        filename: (_, file, callback) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(
            Math.random() * 1e9,
          )}`;
          const extension = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
        },
      }),
    }),
  )
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
  async uploadPDF(@UploadedFile() file) {
    // Lógica para guardar el archivo localmente y obtener la ruta
    const pdfPath = '/public/' + file.filename; // Suponiendo que el archivo se almacene en el directorio 'public'

    // Aquí puedes usar 'pdfPath' para almacenar la ruta en la base de datos o en el campo 'pdfPath' de la entidad ClientEntity
    // Luego, retorna la ruta o algún mensaje de éxito
    return { pdfPath };
  }

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
