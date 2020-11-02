import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {selectAnalyticsOverviewState} from "../../../../../store/selectors/analytics.selector";
import * as overviewConstants from "../../../../../core/consts/analytics-overview";
import {ISort} from "../../../../../core/interfaces/sort";

@Component({
  selector: 'app-analytics-overview-tables',
  templateUrl: './analytics-overview-tables.component.html',
  styleUrls: ['./analytics-overview-tables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsOverviewTablesComponent implements OnInit {
  @Input() state;
  isLoading: boolean;
  debitKeys: string[];
  creditKeys: string[];
  bonusKeys: string[];
  debit: Record<string, Record<string, string | number>>;
  credit: Record<string, Record<string, string | number>>;
  bonus: Record<string, Record<string, string | number>>;

  constructor(protected store: Store<IAppState>) {
    const { debitKeys, creditKeys, bonusKeys } = overviewConstants;
    this.debitKeys = debitKeys;
    this.creditKeys = creditKeys;
    this.bonusKeys = bonusKeys;
  }

  ngOnInit(): void {
    this.store.select(selectAnalyticsOverviewState).subscribe(({debit, credit, bonus, isLoading}) => {
      this.isLoading = isLoading;
      this.debit = debit;
      this.credit = credit;
      this.bonus = bonus;
    });
  }

  onSort(sort: ISort, tableName: string): void {
    let data: Record<string, Record<string, string | number>>;
    let keys: string[];
    if (tableName === "debit") {
      data = this.debit;
      keys = this.debitKeys;
    }
    if (tableName === "credit") {
      data = this.credit;
      keys = this.creditKeys;
    }
    if (tableName === "bonus") {
      data = this.bonus;
      keys = this.bonusKeys;
    }

    keys.pop();
    keys.sort((a: string, b: string) => {
      if (data[a][sort.key] < data[b][sort.key] && sort.value === 'ascend') return -1;
      if (data[a][sort.key] > data[b][sort.key] && sort.value === 'ascend') return 1;

      if (data[a][sort.key] < data[b][sort.key] && sort.value === 'descend') return 1;
      if (data[a][sort.key] > data[b][sort.key] && sort.value === 'descend') return -1;

      return 0;
    });
    keys.push('balance');
  }
}
