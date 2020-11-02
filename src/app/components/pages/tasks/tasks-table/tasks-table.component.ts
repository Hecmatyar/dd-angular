import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BaseTable} from "../../../../core/base/base-table";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {DiggiTaskSearchRequest} from "../../../../api/dto/DiggiTaskSearchRequest.g";
import {TasksActions} from "../../../../store/actions/tasks.actions";
import {initialTasksState, ITasksState} from "../../../../store/state/tasks.state";
import {selectTasksFilter} from "../../../../store/selectors/tascs.selector";
import {ShortDiggiTaskDto} from "../../../../api/dto/ShortDiggiTaskDto.g";
import {ButtonType} from "../../../../core/enums/button-type.enum";
import {NotificationService} from "../../../../core/services/notification.service";

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksTableComponent extends BaseTable implements OnInit {
  @Input() state: ITasksState;
  @Input() openAllCredential: boolean;
  buttonType: typeof ButtonType;

  constructor(
    protected store: Store<IAppState>,
    private notificationService: NotificationService,
  ) {
    super(store);
    this.state = initialTasksState;
    this.selector = selectTasksFilter;
    this.buttonType = ButtonType;
  }

  get items(): ShortDiggiTaskDto[] {
    return this.state.items;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onAddMe(event, diggiTaskId: string): void {
    this.notificationService.showConfirmModal(
      'You want to take this task.',
      () => this.store.dispatch((TasksActions.addMe.started({diggiTaskId})))
    );
  }

  dispatcher(filter: DiggiTaskSearchRequest): void {
    this.store.dispatch(TasksActions.search.started(filter));
  }

  onButtonClick(taskId: string) {
    this.store.dispatch(TasksActions.openTask.started(taskId));
  }
}
