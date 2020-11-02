import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IAnalyticsState, initialAnalyticsState} from "../../../../../store/state/analytics.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {BaseTable} from "../../../../../core/base/base-table";
import {
  selectAnalyticsCardsFilterState,
  selectAnalyticsCardsState
} from "../../../../../store/selectors/analytics.selector";
import {GetCardsAnalyticRequest} from "../../../../../core/interfaces/requests/get-cards-analytic-request";
import {AnalyticsAction} from "../../../../../store/actions/analytics-actions";
import {AdminAnalyticsCardsDto} from "../../../../../api/dto/AdminAnalyticsCardsDto.g";

@Component({
  selector: 'app-analytics-cards-table',
  templateUrl: './analytics-cards-table.component.html',
  styleUrls: ['./analytics-cards-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsCardsTableComponent extends BaseTable implements OnInit {
  @Input() state: IAnalyticsState;
  isLoading: boolean;
  content: AdminAnalyticsCardsDto;
  maxCount = { users: 0, partners: 0, toBulk: 0 };

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.state = initialAnalyticsState;
    this.selector = selectAnalyticsCardsFilterState;
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.store.select(selectAnalyticsCardsState).subscribe( ({ content, isLoading }) => {
      this.content = content;
      this.isLoading = isLoading;

      if (content) {
        const { users, partners, toBulk } = content;
        this.maxCount.users = users.cards.reduce((count, card) => card.count > count ? card.count : count, 0);
        this.maxCount.partners = partners.cards.reduce((count, card) => card.count > count ? card.count : count, 0);
        this.maxCount.toBulk = toBulk.cards.reduce((count, card) => card.count > count ? card.count : count, 0);
      }
    });
  }

  dispatcher(filter: GetCardsAnalyticRequest): void {
    this.store.dispatch(AnalyticsAction.getCards.started(filter));
  }

}
