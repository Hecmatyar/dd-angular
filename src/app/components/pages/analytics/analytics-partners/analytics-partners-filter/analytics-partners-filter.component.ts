import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseFilter} from "../../../../../core/base/base-filter";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {selectAnalyticsPartnersFilterState} from "../../../../../store/selectors/analytics.selector";
import {analyticsPartnersPath} from "../../../../../core/path";
import {AnalyticsAction} from "../../../../../store/actions/analytics-actions";
import {GetPartnersAnalyticRequest} from "../../../../../core/interfaces/requests/get-partners-analytic-request";

@Component({
  selector: 'app-analytics-partners-filter',
  templateUrl: './analytics-partners-filter.component.html',
  styleUrls: ['./analytics-partners-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsPartnersFilterComponent extends BaseFilter {
  header: string = "Analytics Partners";

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectAnalyticsPartnersFilterState;
    this.currentUrl = analyticsPartnersPath;

    this.initialFilter = {
      dateFrom: null,
      dateTo: null,
      partnerId: null,
    };
  }

  dispatchFilter(filter: GetPartnersAnalyticRequest): void {
    this.store.dispatch(AnalyticsAction.getPartners.started(filter));
  }
}
