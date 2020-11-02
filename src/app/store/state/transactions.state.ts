import {BaseState} from "../../core/interfaces/base/base-state";
import {AdminTransactionsFull} from "../../api/dto/AdminTransactionsFull.g";
import {SearchTransactionsRequest} from "../../api/dto/SearchTransactionsRequest.g";
import {ContentLoading, initialContentLoading} from "../../core/interfaces/content-loading";
import {AdminAllowedTransactionTypesDto} from "../../api/dto/AdminAllowedTransactionTypesDto.g";
import {AdminDebtCard} from "../../api/dto/AdminDebtCard.g";

export interface ITransactionState extends BaseState {
  items: AdminTransactionsFull[];
  totalItems: number;
  filter: SearchTransactionsRequest;
  allowedTypes: ContentLoading<AdminAllowedTransactionTypesDto>;
  debtCards: ContentLoading<AdminDebtCard[]>;
  addTransactions: ContentLoading<void>;
}

export const initialTransactionsState: ITransactionState = {
  items: [],
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    }
  } as SearchTransactionsRequest,
  isLoading: true,
  totalItems: 0,
  allowedTypes: initialContentLoading,
  debtCards: initialContentLoading,
  addTransactions: initialContentLoading
};
