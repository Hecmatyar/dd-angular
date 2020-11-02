import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ButtonType} from "../enums/button-type.enum";
import {OnDestroy, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {combineLatest, Subscription} from "rxjs";
import {take} from "rxjs/operators";
import {ITableLoadData} from "../interfaces/table-load-data";
import {Select} from "../interfaces/select";

export abstract class BaseFilter implements OnInit, OnDestroy {
  form: FormGroup;
  buttonType: typeof ButtonType;
  selector;
  currentUrl: string;
  initialFilter: Data;
  subscriptions: Subscription[];

  protected constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activeRouter: ActivatedRoute,
    protected router: Router
  ) {
    this.buttonType = ButtonType;
    this.subscriptions = [];
  }

  static getSelectableItems<T>(enumItem: T): Select[] {
    let items: Select[] = [];
    for (const value in enumItem) {
      if (enumItem.hasOwnProperty(value)) {
        items.push({key: value, value: enumItem[value].toString()});
      }
    }
    items = items.filter(item => item.value !== "Undefined");

    return items;
  }

  ngOnInit(): void {
    const filter = this.getSortPagination();

    this.subscriptions.push(this.activeRouter.queryParams.pipe(take(1)).subscribe(params => {
      const filterParams = {...params};
      if (filterParams.dateFrom) {
        filterParams.dateFrom = new Date(filterParams.dateFrom);
      }
      if (filterParams.dateTo) {
        filterParams.dateTo = new Date(filterParams.dateTo);
      }

      const data = this.updateFormData({...this.initialFilter, ...filterParams});
      this.initForm(data);
      this.dispatchFilter({...data, ...filter});
    }));
  }

  // tslint:disable-next-line:no-any
  initForm(params: any): void {
    const builder = {};
    for (const variable in params) {
      if (params.hasOwnProperty(variable)) {
        builder[variable] = new FormControl(params[variable]);
      }
    }
    this.form = this.fb.group(builder);
  }

  applyFilter(): void {
    const data = {...this.form.value, ...this.getSortPagination(), paged: {page: 1, pageSize: 50}};

    this.router.navigate([this.currentUrl], {
      queryParams: this.form.value
    });
    this.dispatchFilter(data);
  }

  clearFilter(): void {
    this.initForm(this.initialFilter);
    this.applyFilter();
  }

  // tslint:disable-next-line:no-any
  abstract dispatchFilter(params: any): void;

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // tslint:disable-next-line:no-any
  protected updateFormData(data: any): any {
    return data;
  }

  private getSortPagination(): ITableLoadData {
    let filter = {} as ITableLoadData;
    this.subscriptions.push(combineLatest(this.store.select(this.selector).pipe(take(1))).subscribe(selectors => {
      filter = selectors[0];
    }));

    return {paged: filter.paged, sortParamDto: filter.sortParamDto};
  }
}
