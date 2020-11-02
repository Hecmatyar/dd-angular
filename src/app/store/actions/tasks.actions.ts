import actionCreatorFactory from "typescript-fsa";
import {DiggiTaskSearchRequest} from "../../api/dto/DiggiTaskSearchRequest.g";
import {PagedResult} from "../../api/dto/PagedResult.g";
import {ShortDiggiTaskDto} from "../../api/dto/ShortDiggiTaskDto.g";
import {DiggiTaskDto} from "../../api/dto/DiggiTaskDto.g";
import {DiggiTaskSolveRequest} from "../../api/dto/DiggiTaskSolveRequest.g";
import {DiggiTaskAddMeRequest} from "../../api/dto/DiggiTaskAddMeRequest.g";
import {AdminCreateTaskRequest} from "../../api/dto/AdminCreateTaskRequest.g";

export enum ETasksActions {
  SEARCH = "SEARCH",
  OPEN_TASK = "OPEN_TASK",
  CLOSE_TASK = "CLOSE_TASK",
  SOLVE = "SOLVE",
  CHANGE_CREATE_FORM_VISIBLE = "CHANGE_CREATE_FORM_VISIBLE",
  ADD_ME = "ADD_ME",
  CREATE= "CREATE",
}

const actionCreator = actionCreatorFactory("TASKS");

export class TasksActions {
  static search = actionCreator.async<DiggiTaskSearchRequest, PagedResult<ShortDiggiTaskDto>, Error>(ETasksActions.SEARCH);
  static openTask = actionCreator.async<string, DiggiTaskDto, Error>(ETasksActions.OPEN_TASK);
  static closeTask = actionCreator(ETasksActions.CLOSE_TASK);
  static solve = actionCreator.async<DiggiTaskSolveRequest, ShortDiggiTaskDto, Error>(ETasksActions.SOLVE);
  static changeCreateFormVisible = actionCreator(ETasksActions.CHANGE_CREATE_FORM_VISIBLE);
  static create = actionCreator.async<AdminCreateTaskRequest, ShortDiggiTaskDto, Error>(ETasksActions.CREATE);
  static addMe = actionCreator.async<DiggiTaskAddMeRequest, ShortDiggiTaskDto, Error>(ETasksActions.ADD_ME);
}
