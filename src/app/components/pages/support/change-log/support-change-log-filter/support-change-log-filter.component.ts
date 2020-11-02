import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ISupportState} from "../../../../../store/state/support.state";
import {BaseFilter} from "../../../../../core/base/base-filter";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {selectSupportFilter} from "../../../../../store/selectors/support.selectors";
import {supportChangeLogPath} from "../../../../../core/path";
import {AdminSearchAuditRequest} from "../../../../../api/dto/AdminSearchAuditRequest.g";
import {SupportActions} from "../../../../../store/actions/support.actions";

@Component({
  selector: 'app-support-change-log-filter',
  templateUrl: './support-change-log-filter.component.html',
  styleUrls: ['./support-change-log-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportChangeLogFilterComponent extends BaseFilter {
  @Input() state: ISupportState;

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router
  ) {
    super(fb, store, activatedRouter, router);
    this.selector = selectSupportFilter;
    this.currentUrl = supportChangeLogPath;

    this.initialFilter = {
      entityName: null,
      author: null,
      entityId: null,
      dateFrom: null,
      dateTo: null,
    };
  }

  dispatchFilter(params: AdminSearchAuditRequest): void {
    this.store.dispatch(SupportActions.search.started(params));
  }
}
