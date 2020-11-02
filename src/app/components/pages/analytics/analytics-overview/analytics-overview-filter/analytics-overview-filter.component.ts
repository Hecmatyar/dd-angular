import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseFilter} from "../../../../../core/base/base-filter";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {analyticsOverviewPath} from "../../../../../core/path";
import {selectAnalyticsOverviewFilterState} from "../../../../../store/selectors/analytics.selector";
import {GetOverviewAnalyticRequest} from "../../../../../core/interfaces/requests/get-overview-analytic-request";
import {AnalyticsAction} from "../../../../../store/actions/analytics-actions";

@Component({
  selector: 'app-analytics-overview-filter',
  templateUrl: './analytics-overview-filter.component.html',
  styleUrls: ['./analytics-overview-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsOverviewFilterComponent extends BaseFilter {
  header: string = "Analytics Overview";

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectAnalyticsOverviewFilterState;
    this.currentUrl = analyticsOverviewPath;

    this.initialFilter = {
      dateFrom: null,
      dateTo: null
    };
  }

  dispatchFilter(filter: GetOverviewAnalyticRequest): void {
    this.store.dispatch(AnalyticsAction.getOverview.started(filter));
  }
}
