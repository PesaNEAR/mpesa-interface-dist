"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpesaService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const balanceResponses_1 = require("../data/balanceResponses");
const response_1 = require("../data/response");
let MpesaService = class MpesaService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getCompany() {
        return 'TriBeacon';
    }
    accessToken(_callback) {
        const consumerKey = process.env.CONSUMER_KEY;
        const consumerSecret = process.env.CONSUMER_SECRETE;
        const url = process.env.CREDENTIALS_URL;
        const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
        const requestConfig = {
            headers: {
                Authorization: 'Basic ' + auth,
            },
        };
        this.httpService.get(url, requestConfig).subscribe((response) => {
            _callback(response.data);
        });
    }
    stkPush(accessToken, amount, senderAccount, _callback) {
        const url = process.env.STK_PUSH_URL;
        const auth = `Bearer ${accessToken}`;
        const businessShortCode = process.env.BUSINESS_SHORT_CODE;
        const passKey = process.env.PASS_KEY;
        const datenow = new Date();
        const year = datenow.getFullYear();
        const month = ('0' + (datenow.getMonth() + 1)).slice(-2);
        const date = ('0' + datenow.getDate()).slice(-2);
        const hours = ('0' + datenow.getHours()).slice(-2);
        const minutes = ('0' + datenow.getMinutes()).slice(-2);
        const seconds = ('0' + datenow.getSeconds()).slice(-2);
        const timestamp = `${year}${month}${date}${hours}${minutes}${seconds}`;
        const password = Buffer.from(businessShortCode + passKey + timestamp).toString('base64');
        const requestConfig = {
            headers: {
                Authorization: auth,
            },
        };
        const data = {
            BusinessShortCode: businessShortCode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: senderAccount,
            PartyB: businessShortCode,
            PhoneNumber: senderAccount,
            CallBackURL: `https://${process.env.HOSTNAME}/mpesa/stk_callback`,
            AccountReference: process.env.ACCOUNT_REFERENCE,
            TransactionDesc: 'Deposit NEAR tokens',
        };
        this.httpService.post(url, data, requestConfig).subscribe((response) => {
            _callback(response.data);
        });
    }
    storeStkCallbackResponse(response) {
        response_1.stkCallbackResponse.push(response);
    }
    get stkCallbackResponse() {
        return response_1.stkCallbackResponse;
    }
    accountBalance(accessToken, _callback) {
        const url = process.env.BALANCE_URL;
        const auth = `Bearer ${accessToken}`;
        const requestConfig = {
            headers: {
                Authorization: auth,
            },
        };
        const data = {
            Initiator: process.env.INITIATOR_NAME,
            SecurityCredential: process.env.SECURITY_CREDENTIAL,
            CommandID: 'AccountBalance',
            PartyA: process.env.PARTY_A,
            IdentifierType: process.env.IDENTIFIER_TYPE,
            Remarks: 'Remarks',
            QueueTimeOutURL: `https://${process.env.HOSTNAME}/mpesa/balance_timeout`,
            ResultURL: `https://${process.env.HOSTNAME}/mpesa/balance_result`,
        };
        this.httpService.post(url, data, requestConfig).subscribe((response) => {
            _callback(response.data);
        });
    }
    storeBalanceResponse(response) {
        balanceResponses_1.balanceResponses.push(response);
    }
    get balanceResponse() {
        return balanceResponses_1.balanceResponses;
    }
};
MpesaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], MpesaService);
exports.MpesaService = MpesaService;
//# sourceMappingURL=mpesa.service.js.map