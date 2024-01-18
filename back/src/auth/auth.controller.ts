import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import * as jwt from 'jsonwebtoken'; // Importa la biblioteca jsonwebtoken
import { AuthEntity } from './auth.entity';
import { AuthCredentialsDto } from './auth.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @ApiOperation({ summary: 'OPERATIVO' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'online', required: false, type: Boolean })
  @ApiQuery({ name: 'activo', required: false, type: Boolean })
  @ApiResponse({ status: 200, description: 'Return all Auths.' })
  async getAllAuth(@Query() queryParams): Promise<AuthEntity[]> {
    const { page = 1, limit = 10, online, activo } = queryParams;
    return await this.authService.findAll(page, limit, online, activo);
  }

  @Post('login')
  @ApiOperation({ summary: 'OPERATIVO' })
  @ApiResponse({
    status: 200,
    description: 'Login successful. Returns the token.',
  })
  @ApiResponse({ status: 400, description: 'Invalid credentials.' })
  @ApiBody({
    description: 'Login credentials example',
    type: AuthCredentialsDto,
    examples: {
      example1: {
        value: {
          username: 'new_user',
          password: 'new_password',
        },
        summary: 'Sample contact Object',
      },
    },
  })
  async login(@Body() body: AuthCredentialsDto) {
    const { username, password } = body;
    const user = await this.authService.validateUser(username, password);
    if (user) {
      const token = jwt.sign(
        { username: user.username, id: user.id },
        'xilcat',
      );
      return { token };
    }
    return { message: 'Credenciales inválidas' };
  }

  @Post('register')
  @ApiOperation({ summary: 'OPERATIVO' })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiBody({
    description: 'Create user example',
    type: AuthEntity,
    examples: {
      example1: {
        value: {
          username: 'user',
          password: 'password',
        },
        summary: 'Sample contact Object',
      },
    },
  })
  async register(
    @Body(
      new ValidationPipe({
        skipMissingProperties: true,
        forbidNonWhitelisted: true,
        whitelist: true,
      }),
    )
    createUserDto: AuthCredentialsDto,
  ): Promise<AuthEntity | ValidationError[]> {
    return await this.authService.register(createUserDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'OPERATIVO' })
  @ApiParam({ name: 'id', description: 'Auth ID', type: Number })
  @ApiBody({ type: AuthEntity })
  @ApiResponse({ status: 200, description: 'Update a Auth.' })
  async updateClient(
    @Param('id') id: number,
    @Body() authData: Partial<AuthEntity>,
  ): Promise<AuthEntity | ValidationError[]> {
    return await this.authService.update(id, authData);
  }
}
