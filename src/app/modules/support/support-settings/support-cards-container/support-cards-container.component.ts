import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseContainer} from "../../../../core/base/base-container";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {supportRoutes} from "../../../../core/models/support-routes";
import {IHorizontalMenuItem} from "../../../../core/interfaces/gorizontal-menu-item";
import {SupportActions} from "../../../../store/actions/support.actions";
import {AdminCardsSetting} from "../../../../api/dto/AdminCardsSetting.g";
import {Observable} from "rxjs";
import {selectLoadingState, selectSupportCardSettings} from "../../../../store/selectors/support.selectors";

@Component({
  selector: 'app-support-cards-container',
  templateUrl: './support-cards-container.component.html',
  styleUrls: ['./support-cards-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportCardsContainerComponent extends BaseContainer implements OnInit {
  menuItems: IHorizontalMenuItem[];
  isLoading: Observable<boolean>;
  settings: Observable<AdminCardsSetting>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.menuItems = supportRoutes;
  }

  ngOnInit(): void {
    this.store.dispatch(SupportActions.getCard.started());
    this.isLoading = this.store.select(selectLoadingState);
    this.settings = this.store.select(selectSupportCardSettings);
  }

  onSave(settings): void {
    this.store.dispatch(SupportActions.setCard.started(settings));
  }
}
