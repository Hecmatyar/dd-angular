import {Component} from '@angular/core';
import {INavigationItem} from "../../../core/interfaces/navigation-item";
import {navigationRoutes} from "../../../core/models/navigation-routes";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";
import {Observable} from "rxjs";
import {selectCredentialsStatus} from "../../../store/selectors/auth.selector";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navigation: INavigationItem[];

  constructor(private store: Store<IAppState>) {
    this.navigation = navigationRoutes;
  }

  isVisible(levels: AccessLevel[]): boolean {
    return this.getCredentials(...levels).some(item => !!item);
  }

  getCredentials(...levels: AccessLevel[]): Observable<boolean>[] {
    return levels.map(level =>
      this.store.select((state) =>
        selectCredentialsStatus(state, level)
      ));
  }
}
