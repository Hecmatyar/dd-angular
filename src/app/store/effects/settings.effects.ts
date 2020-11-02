import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {AnyAction} from "typescript-fsa";
import {Router} from "@angular/router";
import {SettingsActions} from "../actions/settings.actions";
import {AdminSettingsApiRequest} from "../../api/AdminSettingsApiRequest.g";
import {NotificationService} from "../../core/services/notification.service";
import {AdminCardsSetting} from "../../api/dto/AdminCardsSetting.g";
import {AdminDiscountSetting} from "../../api/dto/AdminDiscountSetting.g";
import {AdminContentSetting} from "../../api/dto/AdminContentSetting.g";
import {AdminBonusSetting} from "../../api/dto/AdminBonusSetting.g";
import {AdminPaymentSettings} from "../../api/dto/AdminPaymentSettings.g";

@Injectable()
export class SettingsEffects {
  @Effect()
  GetCards: Observable<AnyAction> = this.actions$.pipe(
    ofType(SettingsActions.getCards.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getCards()).pipe(
          map((result) => SettingsActions.getCards.done({params, result})),
          catchError((error) => of(SettingsActions.getCards.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetCards: Observable<AnyAction> = this.actions$.pipe(
    ofType(SettingsActions.setCards.started.type),
    map((action: Action<AdminCardsSetting>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.setCards(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Settings cards was successfully updated");

            return SettingsActions.setCards.done({params, result});
          }),
          catchError((error) => of(SettingsActions.setCards.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetDiscount: Observable<AnyAction> = this.actions$.pipe(
    ofType(SettingsActions.getDiscount.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getDiscount()).pipe(
          map((result) => SettingsActions.getDiscount.done({params, result})),
          catchError((error) => of(SettingsActions.getDiscount.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetDiscount: Observable<AnyAction> = this.actions$.pipe(
    ofType(SettingsActions.setDiscount.started.type),
    map((action: Action<AdminDiscountSetting>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.setDiscount(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Settings discount was successfully updated");

            return SettingsActions.setDiscount.done({params, result});
          }),
          catchError((error) => of(SettingsActions.setDiscount.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetContent: Observable<AnyAction> = this.actions$.pipe(
    ofType(SettingsActions.getContent.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getContent()).pipe(
          map((result) => SettingsActions.getContent.done({params, result})),
          catchError((error) => of(SettingsActions.getContent.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetContent: Observable<AnyAction> = this.actions$.pipe(
    ofType(SettingsActions.setContent.started.type),
    map((action: Action<AdminContentSetting>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.setContent(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Settings content was successfully updated");

            return SettingsActions.setContent.done({params, result});
          }),
          catchError((error) => of(SettingsActions.setContent.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetBonus: Observable<AnyAction> = this.actions$.pipe(
    ofType(SettingsActions.getBonus.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getBonus()).pipe(
          map((result) => SettingsActions.getBonus.done({params, result})),
          catchError((error) => of(SettingsActions.getBonus.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetBonus: Observable<AnyAction> = this.actions$.pipe(
    ofType(SettingsActions.setBonus.started.type),
    map((action: Action<AdminBonusSetting>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.setBonus(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Settings bonus was successfully updated");

            return SettingsActions.setBonus.done({params, result});
          }),
          catchError((error) => of(SettingsActions.setBonus.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetPayment: Observable<AnyAction> = this.actions$.pipe(
    ofType(SettingsActions.getPayment.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getPayment()).pipe(
          map((result) => SettingsActions.getPayment.done({params, result})),
          catchError((error) => of(SettingsActions.getPayment.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetPayment: Observable<AnyAction> = this.actions$.pipe(
    ofType(SettingsActions.setPayment.started.type),
    map((action: Action<AdminPaymentSettings>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.setPayment(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Settings payment was successfully updated");

            return SettingsActions.setPayment.done({params, result});
          }),
          catchError((error) => of(SettingsActions.setPayment.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminSettingsApiRequest,
    private router: Router,
    private notificationService: NotificationService,
  ) {
  }
}
