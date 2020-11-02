import {AdminCardDataFull} from "../../api/dto/AdminCardDataFull.g";
import {SearchCardRequest} from "../../api/dto/SearchCardRequest.g";
import {BaseState} from "../../core/interfaces/base/base-state";

export interface ICardsState extends BaseState {
  items: AdminCardDataFull[];
  totalItems: number;
  filter: SearchCardRequest;
}

export const initialCardsState: ICardsState = {
  items: [],
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    }
  } as SearchCardRequest,
  isLoading: true,
  totalItems: 0,
};
