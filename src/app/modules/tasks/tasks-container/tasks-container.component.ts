import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {BaseContainer} from "../../../core/base/base-container";
import {Observable} from "rxjs";
import {selectTasksState} from "../../../store/selectors/tascs.selector";
import {ITasksState} from "../../../store/state/tasks.state";
import {ButtonType} from "../../../core/enums/button-type.enum";
import {TasksActions} from "../../../store/actions/tasks.actions";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksContainerComponent extends BaseContainer {
  state$: Observable<ITasksState>;
  buttonTypes: typeof ButtonType = ButtonType;
  createTaskCredential$: Observable<boolean>;
  openAllCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.state$ = this.store.select(selectTasksState);
    [
      this.openAllCredential$,
      this.createTaskCredential$
    ] = this.getCredentials(AccessLevel.TaskOpenAll, AccessLevel.TaskCreate);
  }

  addNewTask(): void {
    this.store.dispatch(TasksActions.changeCreateFormVisible());
  }
}
