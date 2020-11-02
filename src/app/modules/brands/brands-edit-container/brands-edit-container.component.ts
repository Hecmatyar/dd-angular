import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContentLoading} from "../../../core/interfaces/content-loading";
import {BrandCategory} from "../../../api/dto/BrandCategory.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {selectBrandsCategoryListState} from "../../../store/selectors/brands-category.selector";
import {BrandsCategoryActions} from "../../../store/actions/brands-category.actions";
import {BrandsActions} from "../../../store/actions/brands.actions";
import {
  selectAllBrandsState,
  selectBrandContentState,
  selectBrandState
} from "../../../store/selectors/brands.selector";
import {AdminBrandFull} from "../../../api/dto/AdminBrandFull.g";
import {take} from "rxjs/operators";
import {BaseSubscriber} from "../../../core/base/base-subscriber";
import {ActivatedRoute} from "@angular/router";
import {UpdateBrandRequest} from "../../../core/interfaces/requests/update-brand-request";
import {EntityDto} from "../../../api/dto/EntityDto.g";

@Component({
  selector: 'app-brands-edit-container',
  templateUrl: './brands-edit-container.component.html',
  styleUrls: ['./brands-edit-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsEditContainerComponent extends BaseSubscriber implements OnInit {
  public brand$: Observable<ContentLoading<AdminBrandFull>>;
  public brandContent$: Observable<AdminBrandFull>;
  brandsCategoryState$: Observable<ContentLoading<BrandCategory[]>>;
  allBrandsState$: Observable<ContentLoading<EntityDto[]>>;

  constructor(
    private store: Store<IAppState>,
    private activeRouter: ActivatedRoute
  ) {
    super();
    this.brand$ = this.store.select(selectBrandState);
    this.brandContent$ = this.store.select(selectBrandContentState);
    this.brandsCategoryState$ = this.store.select(selectBrandsCategoryListState);
    this.allBrandsState$ = this.store.select(selectAllBrandsState);
  }

  ngOnInit(): void {
    this.store.dispatch(BrandsCategoryActions.getAll.started());
    this.store.dispatch(BrandsActions.getAll.started());

    this.subscriptions.push(this.activeRouter.params.pipe(take(1)).subscribe(params => {
      this.store.dispatch(BrandsActions.getById.started(params.id));
    }));
  }

  onSubmit(form: UpdateBrandRequest): void {
    this.store.dispatch(BrandsActions.update.started(form));
  }
}
