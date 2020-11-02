import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseFilter} from "../../../../../core/base/base-filter";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {selectAnalyticsCardsFilterState} from "../../../../../store/selectors/analytics.selector";
import {analyticsCardsPath} from "../../../../../core/path";
import {AnalyticsAction} from "../../../../../store/actions/analytics-actions";
import {GetCardsAnalyticRequest} from "../../../../../core/interfaces/requests/get-cards-analytic-request";

@Component({
  selector: 'app-analytics-cards-filter',
  templateUrl: './analytics-cards-filter.component.html',
  styleUrls: ['./analytics-cards-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsCardsFilterComponent extends BaseFilter {
  header: string = "Analytics Cards";

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectAnalyticsCardsFilterState;
    this.currentUrl = analyticsCardsPath;

    this.initialFilter = {
      dateFrom: null,
      dateTo: null,
      brandId: null,
    };
  }

  dispatchFilter(filter: GetCardsAnalyticRequest): void {
    this.store.dispatch(AnalyticsAction.getCards.started(filter));
  }
}
