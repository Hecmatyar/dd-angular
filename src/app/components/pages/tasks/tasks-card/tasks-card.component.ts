import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ButtonType} from "../../../../core/enums/button-type.enum";
import {IAppState} from "../../../../store/state/app.state";
import {Store} from "@ngrx/store";
import {selectTask} from "../../../../store/selectors/tascs.selector";
import {DiggiTaskDto} from "../../../../api/dto/DiggiTaskDto.g";
import {ITasksState} from "../../../../store/state/tasks.state";
import {TasksActions} from "../../../../store/actions/tasks.actions";
import {NotificationService} from "../../../../core/services/notification.service";

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksCardComponent {
  @Input() state: ITasksState;
  buttonTypes: typeof ButtonType;
  task: DiggiTaskDto;
  comment: string;

  constructor(
    protected store: Store<IAppState>,
    private notificationService: NotificationService,
  ) {
    this.buttonTypes = ButtonType;
  }

  handleCancel(): void {
    this.store.dispatch(TasksActions.closeTask());
  }

  handleOk(): void {
    this.notificationService.showConfirmModal(
      'You want to solve and close this task?',
      () => {
        this.store.dispatch(TasksActions.solve.started({diggiTaskId: this.task.id, comment: this.comment}));
      }
    );
  }

  ngOnInit(): void {
    this.store.select(selectTask).subscribe((task: DiggiTaskDto) => {
      this.task = task;
      this.comment = task ? task.comment : null;
      console.log(task);
    });
  }
}
