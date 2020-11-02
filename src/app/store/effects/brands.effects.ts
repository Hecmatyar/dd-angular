import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {from, Observable, of} from "rxjs";
import {AnyAction} from "typescript-fsa";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {BrandsActions} from "../actions/brands.actions";
import {SearchBrandRequest} from "../../api/dto/SearchBrandRequest.g";
import {AdminBrandApiRequest} from "../../api/AdminBrandApiRequest.g";
import {AccessWorker} from "../../core/access-worker";
import {NotificationService} from "../../core/services/notification.service";
import {UpdateBrandRequest} from "../../core/interfaces/requests/update-brand-request";
import {brandListPath} from "../../core/path";
import {AddBrandRequest} from "../../core/interfaces/requests/add-brand-request";
import {SetBrandTopRequest} from "../../api/dto/SetBrandTopRequest.g";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {SetBuyAbilityRequest} from "../../api/dto/SetBuyAbilityRequest.g";

@Injectable()
export class BrandsEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(BrandsActions.getList.started.type),
    map((action: Action<SearchBrandRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.search(params)).pipe(
          map((result) => BrandsActions.getList.done({params, result})),
          catchError((error) => of(BrandsActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetById: Observable<AnyAction> = this.actions$.pipe(
    ofType(BrandsActions.getById.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getById(params)).pipe(
          map((result) => BrandsActions.getById.done({params, result})),
          catchError((error) => of(BrandsActions.getById.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetAll: Observable<AnyAction> = this.actions$.pipe(
    ofType(BrandsActions.getAll.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(() => {
        return from(this.apiRequest.getAll()).pipe(
          map((result) => BrandsActions.getAll.done({result})),
          catchError((error) => of(BrandsActions.getAll.failed({error})))
        );
      }
    ),
  );

  @Effect()
  Update: Observable<AnyAction> = this.actions$.pipe(
    ofType(BrandsActions.update.started.type),
    map((action: Action<UpdateBrandRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.update(params.request, params.imageFile)).pipe(
          map((result) => {
            this.router.navigate([brandListPath]).then(() => {
              this.notificationService.showSuccessMessage("Brand was successfully updated");
            });

            return BrandsActions.update.done({params, result});
          }),
          catchError((error) => of(BrandsActions.update.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Add: Observable<AnyAction> = this.actions$.pipe(
    ofType(BrandsActions.add.started.type),
    map((action: Action<AddBrandRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.add(params.request, params.imageFile)).pipe(
          map((result) => {
            this.router.navigate([brandListPath]).then(() => {
              this.notificationService.showSuccessMessage("Brand was successfully created");
            });

            return BrandsActions.add.done({params, result});
          }),
          catchError((error) => of(BrandsActions.add.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetAbility: Observable<AnyAction> = this.actions$.pipe(
    ofType(BrandsActions.setAbility.started.type),
    map((action: Action<SetBuyAbilityRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.BulkSalesVendorsBlocking)) {
          this.notificationService.showAccessDenyModal();

          return of(BrandsActions.setAbility.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setBuyAbility(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Brand ability was successfully changed");

            return BrandsActions.setAbility.done({params, result});
          }),
          catchError((error) => of(BrandsActions.setAbility.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  UpdateTopCommission: Observable<AnyAction> = this.actions$.pipe(
    ofType(BrandsActions.setTopCommission.started.type),
    map((action: Action<SetBrandTopRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.BrandTopEdit)) {
          this.notificationService.showAccessDenyModal();

          return of(BrandsActions.setTopCommission.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setTopCommissionSell(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Brand commission sell was successfully updated");

            return BrandsActions.setTopCommission.done({params, result});
          }),
          catchError((error) => of(BrandsActions.setTopCommission.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminBrandApiRequest,
    private accessWorker: AccessWorker,
    private notificationService: NotificationService,
    private router: Router,
    // private store: Store<IAppState>
  ) {
  }
}
