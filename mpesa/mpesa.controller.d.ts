import { MpesaService } from './mpesa.service';
export declare class MpesaController {
    private readonly mpesaService;
    constructor(mpesaService: MpesaService);
    getCompany(request: any): string;
}
