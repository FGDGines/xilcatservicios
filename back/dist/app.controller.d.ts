import { Request, Response } from 'express';
export declare class AppController {
    catchAll(req: Request, res: Response): Response<any, Record<string, any>>;
}
