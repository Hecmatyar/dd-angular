import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseFilter} from "../../../../core/base/base-filter";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {selectTasksFilter} from "../../../../store/selectors/tascs.selector";
import {DiggiTaskSearchRequest} from "../../../../api/dto/DiggiTaskSearchRequest.g";
import {TasksActions} from "../../../../store/actions/tasks.actions";
import {tasksListPath} from "../../../../core/path";
import {DiggiTaskPriority} from "../../../../api/dto/DiggiTaskPriority.g";
import {Select} from "../../../../core/interfaces/select";
import {DiggiTaskStatus} from "../../../../api/dto/DiggiTaskStatus.g";
import {DiggiTaskRole} from "../../../../api/dto/DiggiTaskRole.g";

@Component({
  selector: 'app-tasks-filter',
  templateUrl: './tasks-filter.component.html',
  styleUrls: ['./tasks-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksFilterComponent extends BaseFilter {
  priorities: Select[];
  role: Select[];
  statuses: Select[];
  employee: Select[];

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router
  ) {
    super(fb, store, activatedRouter, router);
    this.selector = selectTasksFilter;
    this.currentUrl = tasksListPath;

    this.initialFilter = {
      priority: null,
      role: null,
      status: null,
      employeeId: null,
      number: null,
      dateFrom: null,
      dateTo: null,
    };
    this.priorities = BaseFilter.getSelectableItems<typeof DiggiTaskPriority>(DiggiTaskPriority);
    this.role = BaseFilter.getSelectableItems<typeof DiggiTaskRole>(DiggiTaskRole);
    this.statuses = BaseFilter.getSelectableItems<typeof DiggiTaskStatus>(DiggiTaskStatus);
  }

  dispatchFilter(filter: DiggiTaskSearchRequest): void {
    this.store.dispatch(TasksActions.search.started(filter));
  }
}
