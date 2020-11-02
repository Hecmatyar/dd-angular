import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseFilter} from "../../../../../core/base/base-filter";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {selectAnalyticsValuesFilterState} from "../../../../../store/selectors/analytics.selector";
import {analyticsValuePath} from "../../../../../core/path";
import {AnalyticsAction} from "../../../../../store/actions/analytics-actions";
import {GetValuesAnalyticRequest} from "../../../../../core/interfaces/requests/get-values-analytic-request";

@Component({
  selector: 'app-analytics-values-filter',
  templateUrl: './analytics-values-filter.component.html',
  styleUrls: ['./analytics-values-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsValuesFilterComponent extends BaseFilter {
  header: string = "Analytics Value";

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectAnalyticsValuesFilterState;
    this.currentUrl = analyticsValuePath;

    this.initialFilter = {
      dateFrom: null,
      dateTo: null,
      brandId: null,
      fromValue: null,
      toValue: null,
    };
  }

  onChangeRange({ fromValue, toValue }): void {
    this.form.patchValue({fromValue});
    this.form.patchValue({toValue});
  }

  dispatchFilter(filter: GetValuesAnalyticRequest): void {
    this.store.dispatch(AnalyticsAction.getValues.started(filter));
  }
}
