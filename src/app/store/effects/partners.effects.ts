import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {AnyAction} from "typescript-fsa";
import {AccessWorker} from "../../core/access-worker";
import {NotificationService} from "../../core/services/notification.service";
import {Router} from "@angular/router";
import {PartnersActions} from "../actions/partners.actions";
import {AdminPartnerApiRequest} from "../../api/AdminPartnerApiRequest.g";
import {VerifyPartnerCardRequest} from "../../api/dto/VerifyPartnerCardRequest.g";
import {VerifyCardsFromFileRequest} from "../../core/interfaces/requests/verify-cards-from-file-request";
import {ImportPartnerCardsRequest} from "../../api/dto/ImportPartnerCardsRequest.g";
import {partnersOrderListPath} from "../../core/path";

@Injectable()
export class PartnersEffects {
  @Effect()
  Verify: Observable<AnyAction> = this.actions$.pipe(
    ofType(PartnersActions.verify.started.type),
    map((action: Action<VerifyPartnerCardRequest>) => action.payload),
    switchMap((params) => {
        return from(this.apiRequest.verify(params)).pipe(
          map((result) => PartnersActions.verify.done({result, params})),
          catchError((error) => of(PartnersActions.verify.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  VerifyBatch: Observable<AnyAction> = this.actions$.pipe(
    ofType(PartnersActions.verifyBatch.started.type),
    map((action: Action<VerifyPartnerCardRequest[]>) => action.payload),
    switchMap((params) => {
        return from(this.apiRequest.verifyBatch(params)).pipe(
          map((result) => PartnersActions.verifyBatch.done({result, params})),
          catchError((error) => of(PartnersActions.verifyBatch.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  VerifyFromFile: Observable<AnyAction> = this.actions$.pipe(
    ofType(PartnersActions.verifyFromFile.started.type),
    map((action: Action<VerifyCardsFromFileRequest>) => action.payload),
    switchMap((params) =>
      from(this.apiRequest.verifyFromFile(params.vendorId, params.csv)).pipe(
        map((result) => PartnersActions.verifyFromFile.done({result, params})),
        catchError((error) => of(PartnersActions.verifyFromFile.failed({params, error})))
      )
    ),
  );

  @Effect()
  Import: Observable<AnyAction> = this.actions$.pipe(
    ofType(PartnersActions.import.started.type),
    map((action: Action<ImportPartnerCardsRequest>) => action.payload),
    switchMap((params) => {
        return from(this.apiRequest.import(params)).pipe(
          map((result) => {
            this.router.navigate([partnersOrderListPath]).then(() =>
              this.notificationService.showSuccessMessage("Successfully imported partners order")
            );

            return PartnersActions.import.done({result, params});
          }),
          catchError((error) => of(PartnersActions.import.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetPaymentMethods: Observable<AnyAction> = this.actions$.pipe(
    ofType(PartnersActions.getPaymentMethods.started.type),
    map((action: Action<string>) => action.payload),
    switchMap((params) => {
        return from(this.apiRequest.getPaymentMethods(params)).pipe(
          map((result) => PartnersActions.getPaymentMethods.done({params, result})),
          catchError((error) => of(PartnersActions.getPaymentMethods.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminPartnerApiRequest,
    private accessWorker: AccessWorker,
    private notificationService: NotificationService,
    private router: Router,
  ) {
  }
}
