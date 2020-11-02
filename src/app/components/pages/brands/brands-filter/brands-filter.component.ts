import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BaseFilter} from "../../../../core/base/base-filter";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {brandListPath} from "../../../../core/path";
import {selectBrandsFilterState} from "../../../../store/selectors/brands.selector";
import {SearchBrandRequest} from "../../../../api/dto/SearchBrandRequest.g";
import {BrandsActions} from "../../../../store/actions/brands.actions";
import {Select} from "../../../../core/interfaces/select";
import {BrandType} from "../../../../api/dto/BrandType.g";
import {BrandCategory} from "../../../../api/dto/BrandCategory.g";

@Component({
  selector: 'app-brands-filter',
  templateUrl: './brands-filter.component.html',
  styleUrls: ['./brands-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsFilterComponent extends BaseFilter implements OnInit, OnChanges {
  @Input() brandCategory: BrandCategory[];

  brandTypeItems: Select[];
  brandCategoryItems: Select[];

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectBrandsFilterState;
    this.currentUrl = brandListPath;
    this.brandCategoryItems = [];
    this.initialFilter = {
      search: null,
      brandName: null,
      categoryFilter: null,
      type: null,
    };
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.brandTypeItems = BaseFilter.getSelectableItems<typeof BrandType>(BrandType);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.brandCategory && changes.brandCategory.currentValue) {
      const categories = changes.brandCategory.currentValue;
      this.brandCategoryItems = categories.map(item => ({key: item.id, value: item.name}));
    }
  }

  dispatchFilter(filter: SearchBrandRequest): void {
    this.store.dispatch(BrandsActions.getList.started(filter));
  }
}
