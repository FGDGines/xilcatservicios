import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express'; // Importa los tipos Request, Response y NextFunction de Express
import { CookiesService } from './cookies.service';

@Injectable()
export class CookiesMiddleware implements NestMiddleware {
  constructor(private readonly cookiesService: CookiesService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const cookieConsent = this.cookiesService.getCookie(req, 'cookieConsent');

    if (!cookieConsent) {
      // Si no hay consentimiento, establece una cookie de consentimiento y establece una bandera en la respuesta
      this.cookiesService.setCookie(res, 'cookieConsent', 'true', {
        /* opciones de cookie */
      });
      res.locals.showCookieBanner = true; // Establece la bandera para mostrar el banner en el frontend
    } else {
      res.locals.showCookieBanner = false; // No es necesario mostrar el banner
    }

    next();
  }
}
