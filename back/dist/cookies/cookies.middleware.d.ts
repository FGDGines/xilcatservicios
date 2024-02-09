import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CookiesService } from './cookies.service';
export declare class CookiesMiddleware implements NestMiddleware {
    private readonly cookiesService;
    constructor(cookiesService: CookiesService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
