import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {BaseContainer} from "../../../core/base/base-container";
import {IHorizontalMenuItem} from "../../../core/interfaces/gorizontal-menu-item";
import {analyticsRoutes} from "../../../core/models/analytics-routes";
import {Observable} from "rxjs";
import {selectAnalyticsState} from "../../../store/selectors/analytics.selector";
import {IAnalyticsState} from "../../../store/state/analytics.state";

@Component({
  selector: 'app-analytics-cards-container',
  templateUrl: './analytics-cards-container.component.html',
  styleUrls: ['./analytics-cards-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsCardsContainerComponent extends BaseContainer {
  menuItems: IHorizontalMenuItem[];
  state$: Observable<IAnalyticsState>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.menuItems = analyticsRoutes;
    this.state$ = this.store.select(selectAnalyticsState);
  }
}
