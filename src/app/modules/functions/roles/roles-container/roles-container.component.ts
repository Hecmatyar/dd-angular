import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseContainer} from "../../../../core/base/base-container";
import {Observable} from "rxjs";
import {IRolesState} from "../../../../store/state/roles.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {AccessLevel} from "../../../../api/dto/AccessLevel.g";
import {selectRolesState} from "../../../../store/selectors/roles.selector";

@Component({
  selector: 'app-roles-container',
  templateUrl: './roles-container.component.html',
  styleUrls: ['./roles-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesContainerComponent extends BaseContainer {
  public rolesState$: Observable<IRolesState>;
  public manageCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.rolesState$ = this.store.select(selectRolesState);
    [this.manageCredential$] = this.getCredentials(AccessLevel.RolesRolesManage);
  }
}
