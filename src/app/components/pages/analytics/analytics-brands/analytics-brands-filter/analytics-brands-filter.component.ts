import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseFilter} from "../../../../../core/base/base-filter";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {selectAnalyticsBrandsFilterState} from "../../../../../store/selectors/analytics.selector";
import {analyticsBrandsPath} from "../../../../../core/path";
import {AnalyticsAction} from "../../../../../store/actions/analytics-actions";
import {GetBrandsAnalyticRequest} from "../../../../../core/interfaces/requests/get-brands-analytic-request";
import {ServicePart} from "../../../../../api/dto/ServicePart.g";
import {Select} from "../../../../../core/interfaces/select";

@Component({
  selector: 'app-analytics-brands-filter',
  templateUrl: './analytics-brands-filter.component.html',
  styleUrls: ['./analytics-brands-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsBrandsFilterComponent extends BaseFilter {
  header: string = "Analytics Brads";
  servicePartItems: Select[];

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectAnalyticsBrandsFilterState;
    this.currentUrl = analyticsBrandsPath;

    this.initialFilter = {
      dateFrom: null,
      dateTo: null,
      brandId: null,
      servicePart: null,
    };
    this.servicePartItems = BaseFilter.getSelectableItems<typeof ServicePart>(ServicePart);
  }

  dispatchFilter(filter: GetBrandsAnalyticRequest): void {
    this.store.dispatch(AnalyticsAction.getBrands.started(filter));
  }
}
