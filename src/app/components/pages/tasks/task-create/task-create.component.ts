import {Component, Input, OnInit} from '@angular/core';
import {ITasksState} from "../../../../store/state/tasks.state";
import {ButtonType} from "../../../../core/enums/button-type.enum";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {selectCreate} from "../../../../store/selectors/tascs.selector";
import {TasksActions} from "../../../../store/actions/tasks.actions";
import {DiggiTaskPriority} from "../../../../api/dto/DiggiTaskPriority.g";
import {Select} from "../../../../core/interfaces/select";
import {BaseFilter} from "../../../../core/base/base-filter";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DiggiTaskRole} from "../../../../api/dto/DiggiTaskRole.g";
import {NotificationService} from "../../../../core/services/notification.service";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {
  @Input() state: ITasksState;
  buttonTypes: typeof ButtonType;
  visible: boolean;
  priorities: Select[];
  role: Select[];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    protected store: Store<IAppState>,
    private notificationService: NotificationService
  ) {
    this.buttonTypes = ButtonType;

    this.priorities = BaseFilter.getSelectableItems<typeof DiggiTaskPriority>(DiggiTaskPriority);
    this.role = BaseFilter.getSelectableItems<typeof DiggiTaskRole>(DiggiTaskRole);
    this.initForm();
  }

  ngOnInit(): void {
    this.store.select(selectCreate).subscribe(visible => this.visible = visible);
  }

  handleCancel(): void {
    this.store.dispatch(TasksActions.changeCreateFormVisible());
  }

  handleOk(): void {
    this.form.get('text').markAsTouched();
    if (this.form.invalid) {
      this.notificationService.showErrorMessage("The form is not valid");
      return;
    }
    this.store.dispatch(TasksActions.create.started(this.form.value));
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      priority: 'High',
      role: 'Finance',
      text: [null, Validators.required]
    });
  }

}
