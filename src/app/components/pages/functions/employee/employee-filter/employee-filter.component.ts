import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseFilter} from "../../../../../core/base/base-filter";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {selectEmployeesFilterState} from "../../../../../store/selectors/employee.selector";
import {EmployeeActions} from "../../../../../store/actions/employee.actions";
import {SearchEmployeeRequest} from "../../../../../api/dto/SearchEmployeeRequest.g";
import {employeeCreatePath, employeeListPath} from "../../../../../core/path";

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFilterComponent extends BaseFilter {
  @Input() createCredential: boolean;

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router
  ) {
    super(fb, store, activatedRouter, router);
    this.selector = selectEmployeesFilterState;
    this.currentUrl = employeeListPath;

    this.initialFilter = {
      name: null,
      role: null,
      phone: null,
    };
  }

  dispatchFilter(filter: SearchEmployeeRequest): void {
    this.store.dispatch(EmployeeActions.getList.started(filter));
  }

  initForm(params: SearchEmployeeRequest): void {
    super.initForm(params);
    // this.form.get("brand").setValidators([Validators.required]);
  }

  async createNewEmployee(): Promise<void> {
    await this.router.navigate([employeeCreatePath]);
  }
}
