import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IAnalyticsState, initialAnalyticsState} from "../../../../../store/state/analytics.state";
import {BaseTable} from "../../../../../core/base/base-table";
import {AnalyticsAction} from "../../../../../store/actions/analytics-actions";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {selectAnalyticsValuesFilterState} from "../../../../../store/selectors/analytics.selector";
import {AdminAnalyticsValueDto} from "../../../../../api/dto/AdminAnalyticsValueDto.g";
import {GetValuesAnalyticRequest} from "../../../../../core/interfaces/requests/get-values-analytic-request";

@Component({
  selector: 'app-analytics-values-table',
  templateUrl: './analytics-values-table.component.html',
  styleUrls: ['./analytics-values-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsValuesTableComponent extends BaseTable {
  @Input() state: IAnalyticsState;

  constructor(
    protected store: Store<IAppState>
  ) {
    super(store);
    this.state = initialAnalyticsState;
    this.selector = selectAnalyticsValuesFilterState;
  }

  get items(): AdminAnalyticsValueDto[] {
    return this.state.valuesItems;
  }

  dispatcher(filter: GetValuesAnalyticRequest): void {
    this.store.dispatch(AnalyticsAction.getValues.started(filter));
  }
}
