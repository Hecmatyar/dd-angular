import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialTasksState} from "../state/tasks.state";
import {TasksActions} from "../actions/tasks.actions";

export const tasksReducers = reducerWithInitialState(initialTasksState)
  .case(TasksActions.search.started, (state) => ({ ...state, isLoading: true }))
  .case(TasksActions.search.failed, (state) => ({ ...state, isLoading: false }))
  .case(TasksActions.search.done, (state, {params, result}) => ({
    ...state,
    isLoading: false,
    items: result.items,
    totalItems: result.total,
    filter: params,
  }))
  .case(TasksActions.openTask.started, (state) => ({ ...state, isLoading: true }))
  .case(TasksActions.openTask.failed, (state) => ({ ...state, isLoading: false }))
  .case(TasksActions.openTask.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    openedTask: result,
  }))
  .case(TasksActions.closeTask, (state => ({ ...state, openedTask: null })))
  .case(TasksActions.solve.started, state => ({ ...state, isLoading: true }))
  .case(TasksActions.solve.failed, state => ({ ...state, isLoading: false }))
  .case(TasksActions.solve.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    openedTask: null,
    items: state.items.map(item => item.id === result.id ? result : item)
  }))
  .case(TasksActions.changeCreateFormVisible, state => ({ ...state, create: !state.create }))
  .case(TasksActions.addMe.started, state => ({ ...state, isLoading: true }))
  .case(TasksActions.addMe.failed, state => ({ ...state, isLoading: false }))
  .case(TasksActions.addMe.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    items: state.items.map(item => item.id === result.id ? result : item)
  }))
  .case(TasksActions.create.started, state => ({ ...state, isLoading: true }))
  .case(TasksActions.create.failed, state => ({ ...state, isLoading: false }))
  .case(TasksActions.create.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    create: !state.create,
    items:  [...state.items, result]
  }));
