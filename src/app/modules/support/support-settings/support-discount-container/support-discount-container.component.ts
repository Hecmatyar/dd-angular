import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseContainer} from "../../../../core/base/base-container";
import {IHorizontalMenuItem} from "../../../../core/interfaces/gorizontal-menu-item";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {supportRoutes} from "../../../../core/models/support-routes";
import {Observable} from "rxjs";
import {AdminDiscountSetting} from "../../../../api/dto/AdminDiscountSetting.g";
import {SupportActions} from "../../../../store/actions/support.actions";
import {selectLoadingState, selectSupportDiscountSettings} from "../../../../store/selectors/support.selectors";

@Component({
  selector: 'app-support-discount-container',
  templateUrl: './support-discount-container.component.html',
  styleUrls: ['./support-discount-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportDiscountContainerComponent extends BaseContainer implements OnInit {
  menuItems: IHorizontalMenuItem[];
  isLoading: Observable<boolean>;
  settings: Observable<AdminDiscountSetting>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.menuItems = supportRoutes;
  }

  ngOnInit(): void {
    this.store.dispatch(SupportActions.getDiscount.started());
    this.isLoading = this.store.select(selectLoadingState);
    this.settings = this.store.select(selectSupportDiscountSettings);
  }

  onSave(settings): void {
    this.store.dispatch(SupportActions.setDiscount.started(settings));
  }
}
