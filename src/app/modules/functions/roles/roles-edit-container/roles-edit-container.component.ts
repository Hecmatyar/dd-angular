import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {AdminRole} from "../../../../api/dto/AdminRole.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {RolesActions} from "../../../../store/actions/roles.actions";
import {BaseSubscriber} from "../../../../core/base/base-subscriber";
import {ActivatedRoute} from "@angular/router";
import {selectRoleContentState, selectRoleState} from "../../../../store/selectors/roles.selector";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-roles-edit-container',
  templateUrl: './roles-edit-container.component.html',
  styleUrls: ['./roles-edit-container.component.scss']
})
export class RolesEditContainerComponent extends BaseSubscriber implements OnInit {
  public role$: Observable<ContentLoading<AdminRole>>;
  public roleContent$: Observable<AdminRole>;

  constructor(
    private store: Store<IAppState>,
    private activeRouter: ActivatedRoute) {
    super();
    this.role$ = this.store.select(selectRoleState);
    this.roleContent$ = this.store.select(selectRoleContentState);
  }

  ngOnInit(): void {
    this.subscriptions.push(this.activeRouter.params.pipe(take(1)).subscribe(params => {
      this.store.dispatch(RolesActions.getById.started(params.id));
    }));
  }

  onSubmit(role: AdminRole): void {
    this.store.dispatch(RolesActions.update.started(role));
  }
}
