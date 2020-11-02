import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {initialTasksState, ITasksState} from "../state/tasks.state";

const selectTasks = (state: IAppState) => state.tasks || initialTasksState;

export const selectTasksFilter = createSelector(
  selectTasks,
  (state: ITasksState) => state.filter
);

export const selectTasksState = createSelector(
  selectTasks,
  (state: ITasksState) => state
);

export const selectTask = createSelector(
  selectTasks,
  (state: ITasksState) => state.openedTask
);

export const selectCreate = createSelector(
  selectTasks,
  (state: ITasksState) => state.create
);
