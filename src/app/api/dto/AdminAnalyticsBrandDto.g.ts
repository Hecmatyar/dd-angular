/*tslint:disable*/

export interface AdminAnalyticsBrandDto {
    brand: string;
    loadedCount: number;
    sendCount: number;
    onSaleCount: number;
    activeCount: number;
    guaranteeExpiredCount: number;
    usedCount: number;
    deniedCount: number;
    deniedAmount: number;
    credit: number;
    debit: number;
    profit: number;
}