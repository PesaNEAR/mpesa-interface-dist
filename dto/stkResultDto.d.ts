export declare class StkResultDto {
    Body: ResultBody;
}
export declare class ResultBody {
    stkCallback: StkCallback;
    CallbackMetadata?: CallbackMetadata;
}
export declare class StkCallback {
    MerchantRequestID: string;
    CheckoutRequestID: string;
    ResultCode: number;
    ResultDesc: string;
}
export declare class CallbackMetadata {
    Item: ItemObject[];
}
export declare class ItemObject {
    Name: string;
    Value: string | number;
}
