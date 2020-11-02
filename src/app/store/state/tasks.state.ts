import {BaseState} from "../../core/interfaces/base/base-state";
import {DiggiTaskSearchRequest} from "../../api/dto/DiggiTaskSearchRequest.g";
import {ShortDiggiTaskDto} from "../../api/dto/ShortDiggiTaskDto.g";
import {DiggiTaskDto} from "../../api/dto/DiggiTaskDto.g";

export interface ITasksState extends BaseState {
  filter: DiggiTaskSearchRequest;
  items: ShortDiggiTaskDto[];
  isLoading: boolean;
  totalItems: number;
  openedTask: DiggiTaskDto;
  create: boolean;
}

const defaultFilter = {
  paged: {
    page: 1,
    pageSize: 50
  },
};

export const initialTasksState: ITasksState = {
  filter: {...defaultFilter} as DiggiTaskSearchRequest,
  items: [],
  isLoading: true,
  totalItems: 0,
  openedTask: null,
  create: false,
};
