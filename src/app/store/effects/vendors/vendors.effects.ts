import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {AnyAction} from "typescript-fsa";
import {AdminVendorApiRequest} from "../../../api/AdminVendorApiRequest.g";
import {IEmpty} from "../../../core/interfaces/empty";
import {VendorsActions} from "../../actions/vendors/vendors.actions";

@Injectable()
export class VendorsEffects {
  @Effect()
  GetNotBannedVendorList: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsActions.getNotBannedVendorList.started.type),
    map((action: Action<IEmpty>) => action.payload),
    switchMap(params => {
        return from(this.vendorsApiRequest.getNotBannedBulkSellers()).pipe(
          map((result) => VendorsActions.getNotBannedVendorList.done({params, result})),
          catchError((error) => of(VendorsActions.getNotBannedVendorList.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private vendorsApiRequest: AdminVendorApiRequest,
  ) {
  }
}
