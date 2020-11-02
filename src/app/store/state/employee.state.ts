import {BaseState} from "../../core/interfaces/base/base-state";
import {AdminShortEmployee} from "../../api/dto/AdminShortEmployee.g";
import {SearchEmployeeRequest} from "../../api/dto/SearchEmployeeRequest.g";
import {AdminEmployee} from "../../api/dto/AdminEmployee.g";
import {ContentLoading} from "../../core/interfaces/content-loading";

export interface IEmployeeState extends BaseState {
  items: AdminShortEmployee[];
  totalItems: number;
  filter: SearchEmployeeRequest;
  employee: ContentLoading<AdminEmployee>;
}

export const initialEmployeeState: IEmployeeState = {
  items: [],
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    }
  } as SearchEmployeeRequest,
  isLoading: true,
  totalItems: 0,
  employee: null,
};
