import { Injectable } from '@nestjs/common';
import { Response, Request } from 'express'; // Importa los tipos de Express

@Injectable()
export class CookiesService {
  setCookie(res: Response, name: string, value: string, options?: any) {
    res.cookie(name, value, options); // Utiliza res.cookie para establecer la cookie
  }

  getCookie(req: Request, name: string) {
    return (req.cookies && req.cookies[name]) || undefined; // Usa req.cookies para obtener el valor de la cookie
  }

  clearCookie(res: Response, name: string) {
    res.clearCookie(name); // Usa res.clearCookie para borrar la cookie
  }
}
