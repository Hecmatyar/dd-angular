/*tslint:disable*/
import {ImportPartnerCard} from "./ImportPartnerCard.g";

export interface ImportPartnerCardsRequest {
    vendorId: string;
    paymentMethodId: string;
    cards: ImportPartnerCard[];
}