import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {BrandsCategoryActions} from "../../../store/actions/brands-category.actions";
import {selectBrandsCategoryListState} from "../../../store/selectors/brands-category.selector";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../core/interfaces/content-loading";
import {BrandCategory} from "../../../api/dto/BrandCategory.g";
import {BrandsActions} from "../../../store/actions/brands.actions";
import {AddBrandRequest} from "../../../core/interfaces/requests/add-brand-request";
import {selectAllBrandsState, selectBrandState} from "../../../store/selectors/brands.selector";
import {EntityDto} from "../../../api/dto/EntityDto.g";
import {AdminBrandFull} from "../../../api/dto/AdminBrandFull.g";

@Component({
  selector: 'app-brands-create-container',
  templateUrl: './brands-create-container.component.html',
  styleUrls: ['./brands-create-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsCreateContainerComponent implements OnInit {
  brandsCategoryState$: Observable<ContentLoading<BrandCategory[]>>;
  allBrandsState$: Observable<ContentLoading<EntityDto[]>>;
  public brand$: Observable<ContentLoading<AdminBrandFull>>;

  constructor(
    private store: Store<IAppState>
  ) {
    this.brandsCategoryState$ = this.store.select(selectBrandsCategoryListState);
    this.allBrandsState$ = this.store.select(selectAllBrandsState);
    this.brand$ = this.store.select(selectBrandState);
  }

  ngOnInit(): void {
    this.store.dispatch(BrandsCategoryActions.getAll.started());
    this.store.dispatch(BrandsActions.getAll.started());
  }

  onSubmit(form: AddBrandRequest): void {
    this.store.dispatch(BrandsActions.add.started(form));
  }
}
