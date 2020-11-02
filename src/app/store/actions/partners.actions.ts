import actionCreatorFactory from "typescript-fsa";
import {VerifyPartnerCardRequest} from "../../api/dto/VerifyPartnerCardRequest.g";
import {PartnerImportedCard} from "../../api/dto/PartnerImportedCard.g";
import {VerifyCardsFromFileRequest} from "../../core/interfaces/requests/verify-cards-from-file-request";
import {ImportPartnerCardsRequest} from "../../api/dto/ImportPartnerCardsRequest.g";
import {PaymentMethod} from "../../api/dto/PaymentMethod.g";

export enum EPartnersActions {
  VERIFY = "VERIFY",
  VERIFY_BATCH = "VERIFY_BATCH",
  VERIFY_FROM_FILE = "VERIFY_FROM_FILE",
  IMPORT = "IMPORT",
  GET_PAYMENT_METHODS = "GET_PAYMENT_METHODS",
}

const actionCreator = actionCreatorFactory("PARTNERS");

export class PartnersActions {
  static verify = actionCreator.async<VerifyPartnerCardRequest, PartnerImportedCard, Error>(EPartnersActions.VERIFY);
  static verifyBatch = actionCreator.async<VerifyPartnerCardRequest[], PartnerImportedCard[], Error>(EPartnersActions.VERIFY_BATCH);
  static verifyFromFile = actionCreator.async<VerifyCardsFromFileRequest, PartnerImportedCard[], Error>(EPartnersActions.VERIFY_FROM_FILE);
  static import = actionCreator.async<ImportPartnerCardsRequest, void, Error>(EPartnersActions.IMPORT);
  static getPaymentMethods = actionCreator.async<string, PaymentMethod[], Error>(EPartnersActions.GET_PAYMENT_METHODS);

}
