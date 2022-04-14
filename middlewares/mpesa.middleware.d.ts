import { NestMiddleware } from '@nestjs/common';
import { MpesaService } from 'src/mpesa/mpesa.service';
export declare class MpesaMiddleware implements NestMiddleware {
    private mpesaService;
    constructor(mpesaService: MpesaService);
    use(req: any, res: Response, next: () => void): void;
}
