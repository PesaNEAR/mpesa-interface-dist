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
const rxjs_1 = require("rxjs");
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
        this.httpService.get(url, requestConfig).pipe((0, rxjs_1.catchError)((e) => {
            var _a, _b;
            throw new common_1.HttpException((_a = e.response) === null || _a === void 0 ? void 0 : _a.data, (_b = e.response) === null || _b === void 0 ? void 0 : _b.status);
        }), (0, rxjs_1.map)((response) => response.data), (0, rxjs_1.tap)((data) => {
            _callback(data);
        }));
    }
};
MpesaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], MpesaService);
exports.MpesaService = MpesaService;
//# sourceMappingURL=mpesa.service.js.map