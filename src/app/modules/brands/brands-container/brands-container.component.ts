import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseContainer} from "../../../core/base/base-container";
import {Observable} from "rxjs";
import {IBrandsState} from "../../../store/state/brands.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";
import {selectBrandsState} from "../../../store/selectors/brands.selector";
import {selectBrandsCategoryListState} from "../../../store/selectors/brands-category.selector";
import {BrandCategory} from "../../../api/dto/BrandCategory.g";
import {ContentLoading} from "../../../core/interfaces/content-loading";
import {BrandsCategoryActions} from "../../../store/actions/brands-category.actions";

@Component({
  selector: 'app-brands-container',
  templateUrl: './brands-container.component.html',
  styleUrls: ['./brands-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsContainerComponent extends BaseContainer implements OnInit {
  brandsState$: Observable<IBrandsState>;
  brandsCategoryState$: Observable<ContentLoading<BrandCategory[]>>;
  setTopCredential$: Observable<boolean>;
  abilityCredential$: Observable<boolean>;
  editCredential$: Observable<boolean>;
  createCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.brandsState$ = this.store.select(selectBrandsState);
    this.brandsCategoryState$ = this.store.select(selectBrandsCategoryListState);
    [this.setTopCredential$,
      this.editCredential$,
      this.abilityCredential$,
      this.createCredential$] = this.getCredentials(
      AccessLevel.BrandTopEdit,
      AccessLevel.BrandEdit,
      AccessLevel.BrandBlocking,
      AccessLevel.BrandCreate);
  }

  ngOnInit(): void {
    this.store.dispatch(BrandsCategoryActions.getAll.started());
  }
}
