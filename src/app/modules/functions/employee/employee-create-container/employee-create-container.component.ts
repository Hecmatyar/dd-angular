import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {EmployeeActions} from "../../../../store/actions/employee.actions";
import {ManageEmployeeRequest} from "../../../../api/dto/ManageEmployeeRequest.g";
import {RolesActions} from "../../../../store/actions/roles.actions";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {AdminEmployee} from "../../../../api/dto/AdminEmployee.g";
import {selectEmployeeState} from "../../../../store/selectors/employee.selector";

@Component({
  selector: 'app-employee-create-container',
  templateUrl: './employee-create-container.component.html',
  styleUrls: ['./employee-create-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeCreateContainerComponent implements OnInit {
  public employee$: Observable<ContentLoading<AdminEmployee>>;

  constructor(private store: Store<IAppState>) {
    this.employee$ = this.store.select(selectEmployeeState);
  }

  ngOnInit(): void {
    this.store.dispatch(RolesActions.getAccessById.done({params: [], result: null}));
  }

  onSubmit(employee: ManageEmployeeRequest): void {
    this.store.dispatch(EmployeeActions.add.started(employee));
  }
}
