/*tslint:disable*/

export interface VerifyPartnerCardRequest {
    vendorId: string;
    brand: string;
    number: string;
    pinCode: string;
    expiration: Date | string | null;
    value: number;
}