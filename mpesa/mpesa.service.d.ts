import { HttpService } from '@nestjs/axios';
export declare class MpesaService {
    private httpService;
    constructor(httpService: HttpService);
    getCompany(): string;
    accessToken(_callback: any): void;
}
