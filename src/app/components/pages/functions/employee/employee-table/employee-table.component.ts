import {ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {BaseTable} from "../../../../../core/base/base-table";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {Router} from "@angular/router";
import {AdminShortEmployee} from "../../../../../api/dto/AdminShortEmployee.g";
import {IEmployeeState, initialEmployeeState} from "../../../../../store/state/employee.state";
import {EntityDto} from "../../../../../api/dto/EntityDto.g";
import {selectEmployeesFilterState} from "../../../../../store/selectors/employee.selector";
import {employeeEdit} from "../../../../../core/path";
import {UserStatus} from "../../../../../api/dto/UserStatus.g";
import {NzModalService} from "ng-zorro-antd";
import {EmployeeActions} from "../../../../../store/actions/employee.actions";
import {SearchEmployeeRequest} from "../../../../../api/dto/SearchEmployeeRequest.g";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeTableComponent extends BaseTable {
  @Input() state: IEmployeeState;
  @Input() editCredential: boolean;
  @Input() banCredential: boolean;

  userStatus: typeof UserStatus;
  @ViewChild('modalContent') modalContent: TemplateRef<HTMLElement>;

  constructor(
    protected store: Store<IAppState>,
    private router: Router,
    private modalService: NzModalService
  ) {
    super(store);
    this.state = initialEmployeeState;
    this.selector = selectEmployeesFilterState;
    this.paged = initialEmployeeState.filter.paged;
    this.userStatus = UserStatus;
  }

  dispatcher(filter: SearchEmployeeRequest): void {
    this.store.dispatch(EmployeeActions.getList.started(filter));
  }

  openEmployeeInfo(id: string): void {
    this.store.dispatch(EmployeeActions.getById.started(id));

    const modal = this.modalService.create({
      nzTitle: "Employee info",
      nzContent: this.modalContent,
      nzFooter: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: (): void => modal.destroy()
        }
      ]
    });
  }

  getItemRoles(roles: EntityDto[]): string {
    return roles.map(role => role.name).join(", ");
  }

  async navigateToEditEmployee(id: string): Promise<void> {
    await this.router.navigate([employeeEdit(id)]);
  }

  onBlockUser(user: AdminShortEmployee): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure?',
      nzContent: 'If you ban an employee, he will lose access to the administrative panel.',
      nzOkText: 'Accept',
      nzOnOk: async (): Promise<void> => this.updateUserBlock(user)
    });
  }

  updateUserBlock(user: AdminShortEmployee): void  {
    if (user.status === UserStatus.Blocked) {
      this.store.dispatch(EmployeeActions.setUnBan.started(user.id));
    } else {
      this.store.dispatch(EmployeeActions.setBan.started(user.id));
    }
  }
}
