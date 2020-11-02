import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AccessLevel} from "../../../../api/dto/AccessLevel.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {Observable} from "rxjs";
import {BaseContainer} from "../../../../core/base/base-container";
import {IEmployeeState} from "../../../../store/state/employee.state";
import {selectEmployeesState} from "../../../../store/selectors/employee.selector";
import {SearchEmployeeRequest} from "../../../../api/dto/SearchEmployeeRequest.g";
import {AdminEmployeeApiRequest} from "../../../../api/AdminEmployeeApiRequest.g";

@Component({
  selector: 'app-employee',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeContainerComponent extends BaseContainer {
  public employeeState$: Observable<IEmployeeState>;
  public editCredential$: Observable<boolean>;
  public banCredential$: Observable<boolean>;
  public createCredential$: Observable<boolean>;

  constructor(
    protected store: Store<IAppState>,
    private apiRequest: AdminEmployeeApiRequest) {
    super(store);
    this.employeeState$ = this.store.select(selectEmployeesState);
    [this.editCredential$, this.banCredential$, this.createCredential$] = this.getCredentials(
      AccessLevel.EmployeeEdit,
      AccessLevel.EmployeeBlocking,
      AccessLevel.EmployeeCreate);
  }

  async loadCsv(filter: SearchEmployeeRequest): Promise<Blob> {
    return await this.apiRequest.downloadCsv(filter);
  }
}
