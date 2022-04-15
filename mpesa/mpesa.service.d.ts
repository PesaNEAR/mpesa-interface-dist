import { HttpService } from '@nestjs/axios';
import { StkResponse } from 'src/interfaces/stkResponse';
export declare class MpesaService {
    private httpService;
    constructor(httpService: HttpService);
    getCompany(): string;
    accessToken(_callback: (data: any) => void): void;
    stkPush(accessToken: string, amount: number, senderAccount: string, _callback: (data: StkResponse) => void): void;
    storeStkCallbackResponse(response: any): void;
    get stkCallbackResponse(): any[];
}
