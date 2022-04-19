import { B2CDto } from 'src/dto/b2cDto';
import { BalanceResultDto } from 'src/dto/balanceDto';
import { StkPushDto } from 'src/dto/stkDTO';
import { StkResultDto } from 'src/dto/stkResultDto';
import { MpesaService } from './mpesa.service';
export declare class MpesaController {
    private readonly mpesaService;
    constructor(mpesaService: MpesaService);
    getCompany(request: any): string;
    stkPush(request: any, res: any, body: StkPushDto): void;
    stkCallback(body: StkResultDto): void;
    getStkCallback(): any[];
    balance(request: any, res: any): void;
    balanceTimeout(body: any): void;
    balanceResult(body: BalanceResultDto): void;
    getBalance(): any[];
    b2c(request: any, res: any, body: B2CDto): void;
    b2cTimeout(body: any): void;
    b2cResult(body: any): void;
    getB2c(): any[];
}
