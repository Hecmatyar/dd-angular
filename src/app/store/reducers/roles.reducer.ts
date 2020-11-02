import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialRolesState} from "../state/roles.state";
import {RolesActions} from "../actions/roles.actions";
import {initialContentLoading} from "../../core/interfaces/content-loading";

export const rolesReducer = reducerWithInitialState(initialRolesState)
  .case(RolesActions.getList.started, (state) => ({...state, isLoading: true, items: []}))
  .cases([RolesActions.delete.started], (state) => ({...state, isLoading: true}))
  .case(RolesActions.getList.done, (state, {result}) => ({
      ...state,
      isLoading: false,
      totalItems: result.total,
      items: result.items
    }
  ))
  .cases([RolesActions.getList.failed,
    RolesActions.delete.failed], (state) => ({...state, isLoading: false}))
  .cases([RolesActions.getById.started,
    RolesActions.getEmpty.started], (state) => ({...state, role: {content: null, isLoading: true}}))
  .cases([RolesActions.getById.done,
    RolesActions.getEmpty.started], (state, {result}) => ({...state, role: {content: result, isLoading: false}}))
  .cases([RolesActions.getById.failed,
    RolesActions.getEmpty.started], (state) => ({...state, role: initialContentLoading}))
  .case(RolesActions.getAccessById.started, (state) => ({
    ...state,
    rolesAccessLevelMap: {content: null, isLoading: true}
  }))
  .case(RolesActions.getAccessById.done, (state, {result}) => ({
    ...state,
    rolesAccessLevelMap: {content: result, isLoading: false}
  }))
  .case(RolesActions.getAccessById.failed, (state) => ({
    ...state,
    rolesAccessLevelMap: {content: null, isLoading: false}
  }))
  .case(RolesActions.getAccessLevel.started, (state) => (
    {...state, accessLevelMap: {content: null, isLoading: true}}
  ))
  .case(RolesActions.getAccessLevel.done, (state, {result}) => (
    {...state, accessLevelMap: {content: result, isLoading: false}}
  ))
  .case(RolesActions.getAccessLevel.failed, (state) => (
    {...state, accessLevelMap: {content: null, isLoading: false}}
  ))
  .case(RolesActions.getAll.done, (state, {result}) => ({...state, roleList: result}))
  .cases([RolesActions.update.started,
    RolesActions.add.started], (state) => ({...state, role: {content: state.role.content, isLoading: true}}))
  .cases([RolesActions.update.done,
    RolesActions.add.done], (state, {result}) => ({...state, role: {content: result, isLoading: false}}))
  .cases([RolesActions.update.failed,
    RolesActions.add.failed], (state) => ({...state, role: {content: null, isLoading: false}}));
