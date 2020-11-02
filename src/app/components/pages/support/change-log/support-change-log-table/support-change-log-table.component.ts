import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {AuditInfoDto} from "../../../../../api/dto/AuditInfoDto.g";
import {BaseTable} from "../../../../../core/base/base-table";
import {ISupportState} from "../../../../../store/state/support.state";
import {SupportActions} from "../../../../../store/actions/support.actions";
import {selectSupportFilter} from "../../../../../store/selectors/support.selectors";

@Component({
  selector: 'app-support-change-log-table',
  templateUrl: './support-change-log-table.component.html',
  styleUrls: ['./support-change-log-table.component.scss']
})
export class SupportChangeLogTableComponent extends BaseTable implements OnChanges {
  @Input() state: ISupportState;
  items: AuditInfoDto[];

  constructor(
    protected store: Store<IAppState>,
  ) {
    super(store);
    this.selector = selectSupportFilter;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.state && changes.state.currentValue)
      this.items = changes.state.currentValue.items;
  }

  dispatcher(params: any): void {
    this.store.dispatch(SupportActions.search.started(params));
  }
}
