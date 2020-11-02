import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {BaseContainer} from "../../../core/base/base-container";
import {IHorizontalMenuItem} from "../../../core/interfaces/gorizontal-menu-item";
import {analyticsRoutes} from "../../../core/models/analytics-routes";
import {Observable} from "rxjs";
import {IAnalyticsState} from "../../../store/state/analytics.state";
import {selectAnalyticsState} from "../../../store/selectors/analytics.selector";

@Component({
  selector: 'app-analytics-overview-container',
  templateUrl: './analytics-overview-container.component.html',
  styleUrls: ['./analytics-overview-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsOverviewContainerComponent extends BaseContainer {
  menuItems: IHorizontalMenuItem[];
  state$: Observable<IAnalyticsState>;
  constructor(protected store: Store<IAppState>) {
    super(store);
    this.menuItems = analyticsRoutes;
    this.state$ = this.store.select(selectAnalyticsState);
  }
}
