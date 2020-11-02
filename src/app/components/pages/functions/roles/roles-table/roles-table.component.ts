import {ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {BaseTable} from "../../../../../core/base/base-table";
import {initialRolesState, IRolesState, SearchRolesRequest} from "../../../../../store/state/roles.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {selectRolesFilterState} from "../../../../../store/selectors/roles.selector";
import {AdminRole} from "../../../../../api/dto/AdminRole.g";
import {RolesActions} from "../../../../../store/actions/roles.actions";
import {NzModalService} from "ng-zorro-antd";
import {rolesEdit} from "../../../../../core/path";
import {Router} from "@angular/router";

@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesTableComponent extends BaseTable {
  @Input() state: IRolesState;
  @Input() manageCredential: boolean;

  @ViewChild('modalContent') modalContent: TemplateRef<HTMLElement>;

  constructor(
    protected store: Store<IAppState>,
    private modalService: NzModalService,
    private router: Router) {
    super(store);
    this.state = initialRolesState;
    this.selector = selectRolesFilterState;
  }

  dispatcher(filter: SearchRolesRequest): void {
    this.store.dispatch(RolesActions.getList.started(filter));
  }

  openRoleInfo(id: string): void {
    this.store.dispatch(RolesActions.getById.started(id));

    const modal = this.modalService.create({
      nzTitle: "Roles info",
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

  async navigateToEditRole(id: string): Promise<void> {
    await this.router.navigate([rolesEdit(id)]);
  }

  onDeleteRole(role: AdminRole): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure?',
      nzContent: 'Removing a role can have irreversible effects.',
      nzOkText: 'Accept',
      nzOnOk: async (): Promise<void> => this.deleteRole(role)
    });
  }

  private deleteRole(role: AdminRole): void {
    this.store.dispatch(RolesActions.delete.started(role.id));
  }
}
