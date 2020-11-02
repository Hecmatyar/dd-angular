import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {Observable} from "rxjs";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {selectCredentialsStatus} from "../../store/selectors/auth.selector";

export abstract class BaseContainer {
  selectedList: string[];

  protected constructor(protected store: Store<IAppState>) {
    this.selectedList = [];
  }

  onChangeSelectedRow(values: string[]): void {
    this.selectedList = values;
  }

  getCredentials(...levels: AccessLevel[]): Observable<boolean>[] {
    return levels.map(level =>
      this.store.select((state) =>
        selectCredentialsStatus(state, level)
      ));
  }
}
