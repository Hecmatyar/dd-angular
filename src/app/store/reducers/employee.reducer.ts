import {reducerWithInitialState} from "typescript-fsa-reducers";
import {EmployeeActions} from "../actions/employee.actions";
import {initialEmployeeState} from "../state/employee.state";
import {UserStatus} from "../../api/dto/UserStatus.g";

export const employeeReducer = reducerWithInitialState(initialEmployeeState)
  .case(EmployeeActions.getList.started, (state) => ({...state, isLoading: true, items: []}))
  .cases([EmployeeActions.setBan.started,
    EmployeeActions.setUnBan.started], (state) => ({...state, isLoading: true}))
  .case(EmployeeActions.getList.done, (state, {params, result}) => ({
      ...state,
      isLoading: false,
      totalItems: result.total,
      filter: params,
      items: result.items
    }
  ))
  .cases([EmployeeActions.getList.failed,
    EmployeeActions.setBan.failed,
    EmployeeActions.setUnBan.failed], (state) => ({...state, isLoading: false}))
  .case(EmployeeActions.getById.started, (state) => ({...state, employee: {content: null, isLoading: true}}))
  .case(EmployeeActions.getById.done, (state, {result}) => ({
    ...state, employee: {content: result, isLoading: false}
  }))
  .case(EmployeeActions.getById.failed, (state) => ({...state, employee: {content: null, isLoading: false}}))
  .case(EmployeeActions.setBan.done, (state, {params}) => {
    const employees = state.items.map(item => {
      if (item.id === params) {
        item.status = UserStatus.Blocked;
      }

      return item;
    });

    return ({...state, items: employees, isLoading: false});
  })
  .case(EmployeeActions.setUnBan.done, (state, {params}) => {
    const employees = state.items.map(item => {
      if (item.id === params) {
        item.status = UserStatus.Offline;
      }

      return item;
    });

    return ({...state, items: employees, isLoading: false});
  }).cases([EmployeeActions.update.started,
    EmployeeActions.add.started], (state) => ({
    ...state,
    employee: {...state.employee, isLoading: true}
  }))
  .cases([EmployeeActions.update.done,
    EmployeeActions.update.failed,
    EmployeeActions.add.done,
    EmployeeActions.add.failed], (state) => ({
    ...state,
    employee: {content: state.employee.content, isLoading: false}
  }));
