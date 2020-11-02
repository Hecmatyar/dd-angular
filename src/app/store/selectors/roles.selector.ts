import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {initialRolesState, IRolesState} from "../state/roles.state";

const selectRoles = (state: IAppState): IRolesState => state.roles || initialRolesState;

export const selectRolesState = createSelector(
  selectRoles,
  (state: IRolesState) => state
);

export const selectRoleState = createSelector(
  selectRoles,
  (state: IRolesState) => state.role
);

export const selectRoleContentState = createSelector(
  selectRoles,
  (state: IRolesState) => state.role.content
);

export const selectAccessLevelState = createSelector(
  selectRoles,
  (state: IRolesState) => state.accessLevelMap
);

export const selectRolesAccessLevelState = createSelector(
  selectRoles,
  (state: IRolesState) => state.rolesAccessLevelMap
);

export const selectRolesFilterState = createSelector(
  selectRoles,
  (state: IRolesState) => state.filter
);

export const selectRoleListState = createSelector(
  selectRoles,
  (state: IRolesState) => state.roleList
);
