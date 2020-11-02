import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {AdminRole} from "../../../../api/dto/AdminRole.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {RolesActions} from "../../../../store/actions/roles.actions";
import {selectRoleState} from "../../../../store/selectors/roles.selector";

@Component({
  selector: 'app-roles-create-container',
  templateUrl: './roles-create-container.component.html',
  styleUrls: ['./roles-create-container.component.scss']
})
export class RolesCreateContainerComponent implements OnInit {
  public role$: Observable<ContentLoading<AdminRole>>;

  constructor(private store: Store<IAppState>) {
    this.role$ = this.store.select(selectRoleState);
  }

  ngOnInit(): void {
    this.store.dispatch(RolesActions.getEmpty.started());
  }

  onSubmit(role: AdminRole): void {
    this.store.dispatch(RolesActions.add.started(role));
  }
}
