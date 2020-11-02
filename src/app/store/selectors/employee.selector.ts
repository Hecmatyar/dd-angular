import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IEmployeeState, initialEmployeeState} from "../state/employee.state";

const selectEmployees = (state: IAppState): IEmployeeState => state.employees || initialEmployeeState;

export const selectEmployeesState = createSelector(
  selectEmployees,
  (state: IEmployeeState) => state
);

export const selectEmployeeState = createSelector(
  selectEmployees,
  (state: IEmployeeState) => state.employee
);

export const selectEmployeeContentState = createSelector(
  selectEmployees,
  (state: IEmployeeState) => state.employee.content
);

export const selectEmployeesFilterState = createSelector(
  selectEmployees,
  (state: IEmployeeState) => state.filter
);
