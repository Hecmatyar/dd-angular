import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {catchError, map, switchMap, take} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {AnyAction} from "typescript-fsa";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {AccessWorker} from "../../core/access-worker";
import {NotificationService} from "../../core/services/notification.service";
import {RolesActions} from "../actions/roles.actions";
import {AdminRoleApiRequest} from "../../api/AdminRoleApiRequest.g";
import {AdminRole} from "../../api/dto/AdminRole.g";
import {Router} from "@angular/router";
import {rolesListPath} from "../../core/path";
import {Store} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {selectRolesFilterState} from "../selectors/roles.selector";

@Injectable()
export class RolesEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(RolesActions.getList.started.type),
    map((action: Action<Object>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.search(params["name"], params["paged"]["page"], params["paged"]["pageSize"])).pipe(
          map((result) => RolesActions.getList.done({params, result})),
          catchError((error) => of(RolesActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetById: Observable<AnyAction> = this.actions$.pipe(
    ofType(RolesActions.getById.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getById(params)).pipe(
          map((result) => RolesActions.getById.done({params, result})),
          catchError((error) => of(RolesActions.getById.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetEmpty: Observable<AnyAction> = this.actions$.pipe(
    ofType(RolesActions.getEmpty.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(() => {
        return from(this.apiRequest.emptyRole()).pipe(
          map((result) => RolesActions.getEmpty.done({result})),
          catchError((error) => of(RolesActions.getEmpty.failed({error})))
        );
      }
    ),
  );

  @Effect()
  GetAccessById: Observable<AnyAction> = this.actions$.pipe(
    ofType(RolesActions.getAccessById.started.type),
    map((action: Action<string[]>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getAccessByIds(params)).pipe(
          map((result) => RolesActions.getAccessById.done({params, result})),
          catchError((error) => of(RolesActions.getAccessById.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Add: Observable<AnyAction> = this.actions$.pipe(
    ofType(RolesActions.add.started.type),
    map((action: Action<AdminRole>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.add(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Role was successfully created");
            this.router.navigate([rolesListPath]);

            return RolesActions.add.done({params, result});
          }),
          catchError((error) => of(RolesActions.add.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Update: Observable<AnyAction> = this.actions$.pipe(
    ofType(RolesActions.update.started.type),
    map((action: Action<AdminRole>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.update(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Role was successfully updated");
            this.router.navigate([rolesListPath]);

            return RolesActions.update.done({params, result});
          }),
          catchError((error) => of(RolesActions.update.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Delete: Observable<AnyAction> = this.actions$.pipe(
    ofType(RolesActions.delete.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.RolesRolesManage)) {
          this.notificationService.showAccessDenyModal();

          return of(RolesActions.delete.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.removeRole(params)).pipe(
          switchMap((result) => {
            this.notificationService.showSuccessMessage("Roles was successfully deleted");

            let filter = {};
            this.store.select(selectRolesFilterState).pipe(take(1)).subscribe(selector => {
              filter = selector;
            });

            return [
              RolesActions.delete.done({params, result}),
              RolesActions.getList.started(filter)
            ];
          }),
          catchError((error) => of(RolesActions.delete.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetRoles: Observable<AnyAction> = this.actions$.pipe(
    ofType(RolesActions.getAccessLevel.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getAccessLevelMap()).pipe(
          map((result) => RolesActions.getAccessLevel.done({params, result})),
          catchError((error) => of(RolesActions.getAccessLevel.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetRoleList: Observable<AnyAction> = this.actions$.pipe(
    ofType(RolesActions.getAll.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getAll()).pipe(
          map((result) => RolesActions.getAll.done({params, result})),
          catchError((error) => of(RolesActions.getAll.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminRoleApiRequest,
    private accessWorker: AccessWorker,
    private notificationService: NotificationService,
    private router: Router,
    private store: Store<IAppState>,
  ) {
  }
}
