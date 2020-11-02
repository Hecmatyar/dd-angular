import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {AnyAction} from "typescript-fsa";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {AdminBrandCategoryApiRequest} from "../../api/AdminBrandCategoryApiRequest.g";
import {BrandsCategoryActions} from "../actions/brands-category.actions";

@Injectable()
export class BrandsCategoryEffects {

  @Effect()
  GetAll: Observable<AnyAction> = this.actions$.pipe(
    ofType(BrandsCategoryActions.getAll.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(() => {
        return from(this.apiRequest.getAll()).pipe(
          map((result) => BrandsCategoryActions.getAll.done({result})),
          catchError((error) => of(BrandsCategoryActions.getAll.failed({error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminBrandCategoryApiRequest,
  ) {
  }
}
