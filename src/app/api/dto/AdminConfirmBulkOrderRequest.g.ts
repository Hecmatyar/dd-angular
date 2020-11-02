/*tslint:disable*/

export interface AdminConfirmBulkOrderRequest {
    cardIds: string[];
    paymentMethodId: string;
    externalId: string;
}