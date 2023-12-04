import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'; // Importa los tipos Request y Response de Express
import { CookiesService } from './cookies.service';

@Controller('cookies')
export class CookiesController {
  constructor(private readonly cookiesService: CookiesService) {}

  @Get()
  setCookie(@Res() res: Response) {
    this.cookiesService.setCookie(res, 'cookieName', 'cookieValue', {
      /* opciones de cookie */
    });
    return 'Cookie establecida';
  }

  @Get('/get-cookie')
  getCookie(@Req() req: Request) {
    const cookieValue = this.cookiesService.getCookie(req, 'cookieName');
    return cookieValue
      ? `Valor de la cookie: ${cookieValue}`
      : 'Cookie no encontrada';
  }

  @Get('/clear-cookie')
  clearCookie(@Res() res: Response) {
    this.cookiesService.clearCookie(res, 'cookieName');
    return 'Cookie eliminada';
  }

  @Get('pop-up')
  async tuMetodo(@Res() res: Response) {
    // ... lógica de tu controlador ...

    // Al enviar la respuesta, verifica si se debe mostrar el banner de cookies
    if (res.locals.showCookieBanner) {
      res.set('Show-Cookie-Banner', 'true'); // Puedes usar un encabezado para indicar que se debe mostrar el banner
    } else {
      res.set('Show-Cookie-Banner', 'false'); // O puedes enviar un valor en el cuerpo de la respuesta
    }

    return 'Respuesta de tu controlador';
  }
}
