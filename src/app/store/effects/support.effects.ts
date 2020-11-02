import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {AnyAction} from "typescript-fsa";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {SupportActions} from "../actions/support.actions";
import {AuditApiRequest} from "../../api/AuditApiRequest.g";
import {AdminSearchAuditRequest} from "../../api/dto/AdminSearchAuditRequest.g";
import {AdminSettingsApiRequest} from "../../api/AdminSettingsApiRequest.g";
import {AdminCardsSetting} from "../../api/dto/AdminCardsSetting.g";
import {AdminDiscountSetting} from "../../api/dto/AdminDiscountSetting.g";
import {AdminBonusSetting} from "../../api/dto/AdminBonusSetting.g";
import {AdminContentSetting} from "../../api/dto/AdminContentSetting.g";

@Injectable()
export class SupportEffects {
  @Effect()
  search: Observable<AnyAction> = this.actions$.pipe(
    ofType(SupportActions.search.started.type),
    map((action: Action<AdminSearchAuditRequest>) => action.payload),
    switchMap(params => {
      return from(this.auditApiRequest.search(params)).pipe(
        map((result) => SupportActions.search.done({params, result})),
        catchError((error) => of(SupportActions.search.failed({params, error})))
      );
    })
  );

  @Effect()
  getCard: Observable<AnyAction> = this.actions$.pipe(
    ofType(SupportActions.getCard.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.getCards()).pipe(
        map((result) => SupportActions.getCard.done({params, result})),
        catchError((error) => of(SupportActions.getCard.failed({params, error})))
      );
    })
  );

  @Effect()
  setCard: Observable<AnyAction> = this.actions$.pipe(
    ofType(SupportActions.setCard.started.type),
    map((action: Action<AdminCardsSetting>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.setCards(params)).pipe(
        map((result) => SupportActions.setCard.done({params, result})),
        catchError((error) => of(SupportActions.setCard.failed({params, error})))
      );
    })
  );

  @Effect()
  getDiscount: Observable<AnyAction> = this.actions$.pipe(
    ofType(SupportActions.getDiscount.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.getDiscount()).pipe(
        map((result) => SupportActions.getDiscount.done({params, result})),
        catchError((error) => of(SupportActions.getDiscount.failed({params, error})))
      );
    })
  );

  @Effect()
  setDiscount: Observable<AnyAction> = this.actions$.pipe(
    ofType(SupportActions.setDiscount.started.type),
    map((action: Action<AdminDiscountSetting>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.setDiscount(params)).pipe(
        map((result) => SupportActions.setDiscount.done({params, result})),
        catchError((error) => of(SupportActions.setDiscount.failed({params, error})))
      );
    })
  );

  @Effect()
  getBonus: Observable<AnyAction> = this.actions$.pipe(
    ofType(SupportActions.getBonus.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.getBonus()).pipe(
        map((result) => SupportActions.getBonus.done({params, result})),
        catchError((error) => of(SupportActions.getBonus.failed({params, error})))
      );
    })
  );

  @Effect()
  setBonus: Observable<AnyAction> = this.actions$.pipe(
    ofType(SupportActions.setBonus.started.type),
    map((action: Action<AdminBonusSetting>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.setBonus(params)).pipe(
        map((result) => SupportActions.setBonus.done({params, result})),
        catchError((error) => of(SupportActions.setBonus.failed({params, error})))
      );
    })
  );

  @Effect()
  getContent: Observable<AnyAction> = this.actions$.pipe(
    ofType(SupportActions.getContent.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.getContent()).pipe(
        map((result) => SupportActions.getContent.done({params, result})),
        catchError((error) => of(SupportActions.getContent.failed({params, error})))
      );
    })
  );

  @Effect()
  setContent: Observable<AnyAction> = this.actions$.pipe(
    ofType(SupportActions.setContent.started.type),
    map((action: Action<AdminContentSetting>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.setContent(params)).pipe(
        map((result) => SupportActions.setContent.done({params, result})),
        catchError((error) => of(SupportActions.setContent.failed({params, error})))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private auditApiRequest: AuditApiRequest,
    private apiRequest: AdminSettingsApiRequest,
  ) {
  }
}
