import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseContainer} from "../../../../core/base/base-container";
import {IHorizontalMenuItem} from "../../../../core/interfaces/gorizontal-menu-item";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {supportRoutes} from "../../../../core/models/support-routes";
import {Observable} from "rxjs";
import {SupportActions} from "../../../../store/actions/support.actions";
import {selectLoadingState, selectSupportContentSettings} from "../../../../store/selectors/support.selectors";
import {AdminContentSetting} from "../../../../api/dto/AdminContentSetting.g";

@Component({
  selector: 'app-support-content-container',
  templateUrl: './support-content-container.component.html',
  styleUrls: ['./support-content-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportContentContainerComponent extends BaseContainer implements OnInit {
  menuItems: IHorizontalMenuItem[];
  isLoading: Observable<boolean>;
  settings: Observable<AdminContentSetting>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.menuItems = supportRoutes;
  }

  ngOnInit(): void {
    this.store.dispatch(SupportActions.getContent.started());
    this.isLoading = this.store.select(selectLoadingState);
    this.settings = this.store.select(selectSupportContentSettings);
  }

  onSave(settings): void {
    this.store.dispatch(SupportActions.setContent.started(settings));
  }
}
