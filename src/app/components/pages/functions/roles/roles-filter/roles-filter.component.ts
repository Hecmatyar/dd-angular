import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonType} from "../../../../../core/enums/button-type.enum";
import {rolesCreatePath, rolesListPath} from "../../../../../core/path";
import {BaseFilter} from "../../../../../core/base/base-filter";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {selectRolesFilterState} from "../../../../../store/selectors/roles.selector";
import {RolesActions} from "../../../../../store/actions/roles.actions";
import {SearchRolesRequest} from "../../../../../store/state/roles.state";

@Component({
  selector: 'app-roles-filter',
  templateUrl: './roles-filter.component.html',
  styleUrls: ['./roles-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesFilterComponent extends BaseFilter {
  public buttonType: typeof ButtonType;

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.buttonType = ButtonType;
    this.selector = selectRolesFilterState;
    this.currentUrl = rolesListPath;

    this.initialFilter = {
      name: null
    };
  }

  async createNewRole(): Promise<void> {
    await this.router.navigate([rolesCreatePath]);
  }

  dispatchFilter(filter: SearchRolesRequest): void {
    this.store.dispatch(RolesActions.getList.started(filter));
  }
}
