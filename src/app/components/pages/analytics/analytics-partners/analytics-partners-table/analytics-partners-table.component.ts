import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IAnalyticsState, initialAnalyticsState} from "../../../../../store/state/analytics.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {AnalyticsAction} from "../../../../../store/actions/analytics-actions";
import {BaseTable} from "../../../../../core/base/base-table";
import {selectAnalyticsPartnersFilterState} from "../../../../../store/selectors/analytics.selector";
import {GetPartnersAnalyticRequest} from "../../../../../core/interfaces/requests/get-partners-analytic-request";
import {AdminAnalyticPartnerDto} from "../../../../../api/dto/AdminAnalyticPartnerDto.g";

@Component({
  selector: 'app-analytics-partners-table',
  templateUrl: './analytics-partners-table.component.html',
  styleUrls: ['./analytics-partners-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsPartnersTableComponent extends BaseTable {
  @Input() state: IAnalyticsState;

  constructor(
    protected store: Store<IAppState>
  ) {
    super(store);
    this.state = initialAnalyticsState;
    this.selector = selectAnalyticsPartnersFilterState;
  }

  get items(): AdminAnalyticPartnerDto[] {
    return this.state.partnersItems;
  }

  dispatcher(filter: GetPartnersAnalyticRequest): void {
    this.store.dispatch(AnalyticsAction.getPartners.started(filter));
  }
}
