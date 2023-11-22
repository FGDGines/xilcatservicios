import { Controller, Get } from '@nestjs/common';

@Controller()
export class EjemploController {
  @Get('ejemplo')
  getEjemplo(): any {
    return { mensaje: '¡Hola desde el endpoint de ejemplo!' };
  }
}
