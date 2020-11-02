import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseContainer} from "../../../../core/base/base-container";
import {IHorizontalMenuItem} from "../../../../core/interfaces/gorizontal-menu-item";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {supportRoutes} from "../../../../core/models/support-routes";
import {Observable} from "rxjs";
import {SupportActions} from "../../../../store/actions/support.actions";
import {selectLoadingState, selectSupportBonusSettings} from "../../../../store/selectors/support.selectors";
import {AdminBonusSetting} from "../../../../api/dto/AdminBonusSetting.g";

@Component({
  selector: 'app-support-bonus-container',
  templateUrl: './support-bonus-container.component.html',
  styleUrls: ['./support-bonus-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportBonusContainerComponent extends BaseContainer implements OnInit {
  menuItems: IHorizontalMenuItem[];
  isLoading: Observable<boolean>;
  settings: Observable<AdminBonusSetting>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.menuItems = supportRoutes;
  }

  ngOnInit(): void {
    this.store.dispatch(SupportActions.getBonus.started());
    this.isLoading = this.store.select(selectLoadingState);
    this.settings = this.store.select(selectSupportBonusSettings);
  }

  onSave(settings): void {
    this.store.dispatch(SupportActions.setBonus.started(settings));
  }
}
