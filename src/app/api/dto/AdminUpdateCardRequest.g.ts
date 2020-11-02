/*tslint:disable*/

export interface AdminUpdateCardRequest {
    id: string;
    number: string;
    pinCode: string;
    expiration: Date | string | null;
    value: number;
    currentAmount: number;
}