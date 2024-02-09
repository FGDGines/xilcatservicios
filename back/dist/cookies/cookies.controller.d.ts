import { Request, Response } from 'express';
import { CookiesService } from './cookies.service';
import { AcceptCookiesDto } from './cookies.dto';
export declare class CookiesController {
    private readonly cookiesService;
    constructor(cookiesService: CookiesService);
    setCookie(res: Response): string;
    getCookie(req: Request): string;
    clearCookie(res: Response): string;
    acceptCookies(body: AcceptCookiesDto, res: Response): Promise<Response<any, Record<string, any>>>;
    Headers(res: Response): Promise<string>;
    PopUp(res: Response): Promise<void | "Respuesta de tu controlador cuando no se muestra el banner">;
}
