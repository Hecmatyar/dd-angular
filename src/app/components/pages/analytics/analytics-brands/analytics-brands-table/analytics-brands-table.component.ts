import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseTable} from "../../../../../core/base/base-table";
import {IAnalyticsState, initialAnalyticsState} from "../../../../../store/state/analytics.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {selectAnalyticsBrandsFilterState} from "../../../../../store/selectors/analytics.selector";
import {GetBrandsAnalyticRequest} from "../../../../../core/interfaces/requests/get-brands-analytic-request";
import {AnalyticsAction} from "../../../../../store/actions/analytics-actions";
import {AdminAnalyticsBrandDto} from "../../../../../api/dto/AdminAnalyticsBrandDto.g";

@Component({
  selector: 'app-analytics-brands-table',
  templateUrl: './analytics-brands-table.component.html',
  styleUrls: ['./analytics-brands-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsBrandsTableComponent extends BaseTable {
  @Input() state: IAnalyticsState;

  constructor(
    protected store: Store<IAppState>
  ) {
    super(store);
    this.state = initialAnalyticsState;
    this.selector = selectAnalyticsBrandsFilterState;
  }

  get items(): AdminAnalyticsBrandDto[] {
    return this.state.brandsItems;
  }

  dispatcher(filter: GetBrandsAnalyticRequest): void {
    this.store.dispatch(AnalyticsAction.getBrands.started(filter));
  }
}
