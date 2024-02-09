import { Response, Request, CookieOptions } from 'express';
import { CookieEntity } from './cookies.entity';
import { Repository } from 'typeorm';
export declare class CookiesService {
    private readonly cookieRepository;
    constructor(cookieRepository: Repository<CookieEntity>);
    saveCookie(cookieLog: CookieEntity): Promise<CookieEntity>;
    setCookie(res: Response, name: string, value: string, options?: CookieOptions): void;
    getCookie(req: Request, name: string): any;
    clearCookie(res: Response, name: string): void;
}
