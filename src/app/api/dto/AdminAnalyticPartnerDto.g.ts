/*tslint:disable*/

export interface AdminAnalyticPartnerDto {
    id: string;
    name: string;
    ordersCount: number;
    lastOrder: Date | string | null;
    cardsCount: number;
    payOut: number;
    toPay: number;
    reliability: number;
    debt: number;
    hold: number;
    city: string;
}