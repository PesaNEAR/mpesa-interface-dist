"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mpesa_middleware_1 = require("./middlewares/mpesa.middleware");
const mpesa_controller_1 = require("./mpesa/mpesa.controller");
const mpesa_module_1 = require("./mpesa/mpesa.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(mpesa_middleware_1.MpesaMiddleware)
            .exclude('/mpesa/stk_callback', '/mpesa/balance_result', '/mpesa/balance_timeout', '/mpesa/b2c_result', '/mpesa/b2c_timeout')
            .forRoutes(mpesa_controller_1.MpesaController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mpesa_module_1.MpesaModule, config_1.ConfigModule.forRoot()],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map