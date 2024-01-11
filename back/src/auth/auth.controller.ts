import {
  Body,
  Controller,
  Post,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import * as jwt from 'jsonwebtoken'; // Importa la biblioteca jsonwebtoken
import { AuthEntity } from './auth.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'OPERATIVO' })
  @ApiResponse({
    status: 200,
    description: 'Login successful. Returns the token.',
  })
  @ApiResponse({ status: 400, description: 'Invalid credentials.' })
  @ApiBody({
    description: 'Login credentials example',
    type: AuthEntity,
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
  async login(@Body() body: AuthEntity) {
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
    @Body(new ValidationPipe()) createUserDto: AuthEntity,
  ): Promise<AuthEntity | ValidationError[]> {
    return await this.authService.register(createUserDto);
  }
}
