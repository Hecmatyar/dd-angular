/*tslint:disable*/

export interface AdminBulkOrderDetail {
    totalCards: number;
    paidCards: number;
    awaitingCards: number;
    deniedCards: number;
    invalidCards: number;
    externalId: string;
}