import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseContainer} from "../../../core/base/base-container";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {Observable} from "rxjs";
import {selectSupportState} from "../../../store/selectors/support.selectors";
import {ISupportState} from "../../../store/state/support.state";

@Component({
  selector: 'app-support-change-log-container',
  templateUrl: './support-change-log-container.component.html',
  styleUrls: ['./support-change-log-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportChangeLogContainerComponent extends BaseContainer {
  state$: Observable<ISupportState>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.state$ = this.store.select(selectSupportState);
  }
}
