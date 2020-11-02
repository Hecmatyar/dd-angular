import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {ManageEmployeeRequest} from "../../../../api/dto/ManageEmployeeRequest.g";
import {EmployeeActions} from "../../../../store/actions/employee.actions";
import {Observable} from "rxjs";
import {AdminEmployee} from "../../../../api/dto/AdminEmployee.g";
import {selectEmployeeContentState, selectEmployeeState} from "../../../../store/selectors/employee.selector";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs/operators";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {BaseSubscriber} from "../../../../core/base/base-subscriber";

@Component({
  selector: 'app-employee-update-container',
  templateUrl: './employee-edit-container.component.html',
  styleUrls: ['./employee-edit-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeEditContainerComponent extends BaseSubscriber implements OnInit {
  public employee$: Observable<ContentLoading<AdminEmployee>>;
  public employeeContent$: Observable<AdminEmployee>;

  constructor(
    private store: Store<IAppState>,
    private activeRouter: ActivatedRoute) {
    super();
    this.employee$ = this.store.select(selectEmployeeState);
    this.employeeContent$ = this.store.select(selectEmployeeContentState);
  }

  ngOnInit(): void {
    this.subscriptions.push(this.activeRouter.params.pipe(take(1)).subscribe(params => {
      this.store.dispatch(EmployeeActions.getById.started(params.id));
    }));
  }

  onSubmit(employee: ManageEmployeeRequest): void {
    this.store.dispatch(EmployeeActions.update.started(employee));
  }
}
