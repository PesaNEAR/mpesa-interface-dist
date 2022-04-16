import { HttpService } from '@nestjs/axios';
import { BalanceResponse } from 'src/interfaces/balanceResponse';
import { StkResponse } from 'src/interfaces/stkResponse';
export declare class MpesaService {
    private httpService;
    constructor(httpService: HttpService);
    getCompany(): string;
    accessToken(_callback: (data: any) => void): void;
    stkPush(accessToken: string, amount: number, senderAccount: string, _callback: (data: StkResponse) => void): void;
    storeStkCallbackResponse(response: any): void;
    get stkCallbackResponse(): any[];
    accountBalance(accessToken: string, _callback: (data: BalanceResponse) => void): void;
    storeBalanceResponse(response: any): void;
    get balanceResponse(): any[];
}
