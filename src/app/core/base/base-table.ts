import {EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {Paged} from "../../api/dto/Paged.g";
import {SortParamDto} from "../../api/dto/SortParamDto.g";
import {ITableLoadData} from "../interfaces/table-load-data";
import {ISort} from "../interfaces/sort";
import {SortTypes} from "../enums/sort-type";
import {combineLatest, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {Select} from "../interfaces/select";
import {take} from "rxjs/operators";

export abstract class BaseTable implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-any
  @Input() state: any;

  @Output() selectedRows = new EventEmitter<string[]>();

  paged: Paged;
  sortParamDto: SortParamDto;
  selectedList: string[];
  expandedList: string[];
  subscriptions: Subscription[];
  // tslint:disable-next-line:no-any
  selector: any;

  protected constructor(protected store: Store<IAppState>) {
    this.sortParamDto = {} as SortParamDto;
    this.selectedList = [];
    this.expandedList = [];
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.subscriptions.push(this.store.select(this.selector).subscribe(selectors => {
      this.paged = selectors.paged;
    }));
  }

  //tslint:disable-next-line:no-any
  trackByFn(index: number, item: any): string {
    return item.id || index;
  }

  isCardSelected(cardsId: string): boolean {
    return this.selectedList.includes(cardsId);
  }

  onCheckToExport(id: string): void {
    this.isCardSelected(id)
      ? this.selectedList = this.selectedList.filter(item => item !== id)
      : this.selectedList.push(id);
    this.selectedRows.emit(this.selectedList);
  }

  isCardExpanded(cardsId: string): boolean {
    return this.expandedList.includes(cardsId);
  }

  onExpandCard(id: string): void {
    this.isCardExpanded(id)
      ? this.expandedList = this.expandedList.filter(item => item !== id)
      : this.expandedList.push(id);
  }

  loadEmit(): void {
    this.dispatcher({...this.getFilter(), paged: this.paged, sortParamDto: this.sortParamDto});
  }

  onPageChange(page: number): void {
    this.paged.page = page;
    this.loadEmit();
  }

  onPageSizeChange(pageSize: number): void {
    this.paged.pageSize = pageSize;
    this.loadEmit();
  }

  onSort(sort: ISort): void {
    if (sort.value) {
      this.sortParamDto.fieldName = sort.key;
      this.sortParamDto.isDesc = sort.value !== SortTypes.ascend;
    } else {
      this.sortParamDto = {} as SortParamDto;
    }
    this.loadEmit();
  }

  //tslint:disable-next-line:no-any
  getStatusEnum(item: any): Select[] {
    const statuses = [...item.availableTransitions, item.status];

    return statuses.map(status => ({key: status, value: status}));
  }

  // tslint:disable-next-line:no-any
  abstract dispatcher(params: any): void;

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  //tslint:disable-next-line:no-any
  private getFilter(): any {
    let filter = {} as ITableLoadData;
    this.subscriptions.push(combineLatest(this.store.select(this.selector).pipe(take(1))).subscribe(selectors => {
      filter = selectors[0];
    }));

    return filter;
  }
}
