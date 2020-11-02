/*tslint:disable*/
import {EntityDto} from "./EntityDto.g";
import {CardInfoDto} from "./CardInfoDto.g";

export interface AdminBulkCardInfoDto {
    brand: EntityDto;
    cardInfo: CardInfoDto;
    buyPercent: number;
    lastPayOut: number;
    willPaidUs: number;
}