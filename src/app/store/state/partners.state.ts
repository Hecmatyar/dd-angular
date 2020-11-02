import {BaseState} from "../../core/interfaces/base/base-state";
import {ContentLoading, initialContentLoading} from "../../core/interfaces/content-loading";
import {PartnerImportedCard} from "../../api/dto/PartnerImportedCard.g";
import {PaymentMethod} from "../../api/dto/PaymentMethod.g";

export interface IPartnersState extends BaseState {
  cards: ContentLoading<PartnerImportedCard[]>;
  paymentTypes: ContentLoading<PaymentMethod[]>;
}

export const initialPartnersState: IPartnersState = {
  isLoading: false,
  cards: initialContentLoading,
  paymentTypes: initialContentLoading
};
