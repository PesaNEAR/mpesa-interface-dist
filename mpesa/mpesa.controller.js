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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpesaController = void 0;
const common_1 = require("@nestjs/common");
const balanceDto_1 = require("../dto/balanceDto");
const stkDTO_1 = require("../dto/stkDTO");
const stkResultDto_1 = require("../dto/stkResultDto");
const mpesa_service_1 = require("./mpesa.service");
let MpesaController = class MpesaController {
    constructor(mpesaService) {
        this.mpesaService = mpesaService;
    }
    getCompany(request) {
        return `${this.mpesaService.getCompany()}. Token: ${request.access_token}`;
    }
    stkPush(request, res, body) {
        this.mpesaService.stkPush(request.access_token, body.amount, body.account_number, (data) => {
            if (data.ResponseCode == 0) {
            }
            else {
            }
            this.mpesaService.storeStkCallbackResponse(data);
            res.send(data);
        });
    }
    stkCallback(body) {
        this.mpesaService.storeStkCallbackResponse(body);
    }
    getStkCallback() {
        return this.mpesaService.stkCallbackResponse;
    }
    balance(request, res) {
        this.mpesaService.accountBalance(request.access_token, (data) => {
            if (data.ResponseCode == 0) {
            }
            else {
            }
            res.send(data);
        });
    }
    balanceTimeout(body) {
        this.mpesaService.storeBalanceResponse(Object.assign({ name: 'Timeout' }, body));
    }
    balanceResult(body) {
        this.mpesaService.storeBalanceResponse(Object.assign({ name: 'Result' }, body));
    }
    getBalance() {
        return this.mpesaService.balanceResponse;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], MpesaController.prototype, "getCompany", null);
__decorate([
    (0, common_1.Post)('/stk'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, stkDTO_1.StkPushDto]),
    __metadata("design:returntype", void 0)
], MpesaController.prototype, "stkPush", null);
__decorate([
    (0, common_1.Post)('/stk_callback'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stkResultDto_1.StkResultDto]),
    __metadata("design:returntype", void 0)
], MpesaController.prototype, "stkCallback", null);
__decorate([
    (0, common_1.Get)('/stk_callback'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MpesaController.prototype, "getStkCallback", null);
__decorate([
    (0, common_1.Post)('/balance'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MpesaController.prototype, "balance", null);
__decorate([
    (0, common_1.Post)('/balance_timeout'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MpesaController.prototype, "balanceTimeout", null);
__decorate([
    (0, common_1.Post)('/balance_result'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [balanceDto_1.BalanceResultDto]),
    __metadata("design:returntype", void 0)
], MpesaController.prototype, "balanceResult", null);
__decorate([
    (0, common_1.Get)('/balance_result'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MpesaController.prototype, "getBalance", null);
MpesaController = __decorate([
    (0, common_1.Controller)('mpesa'),
    __metadata("design:paramtypes", [mpesa_service_1.MpesaService])
], MpesaController);
exports.MpesaController = MpesaController;
//# sourceMappingURL=mpesa.controller.js.map