import { StkPushDto } from 'src/dto/stkDTO';
import { MpesaService } from './mpesa.service';
export declare class MpesaController {
    private readonly mpesaService;
    constructor(mpesaService: MpesaService);
    getCompany(request: any): string;
    stkPush(request: any, res: any, body: StkPushDto): void;
    stkCallback(body: any): void;
    getStkCallback(): any[];
}
