import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {AnyAction} from "typescript-fsa";
import {EmployeeActions} from "../actions/employee.actions";
import {SearchEmployeeRequest} from "../../api/dto/SearchEmployeeRequest.g";
import {AdminEmployeeApiRequest} from "../../api/AdminEmployeeApiRequest.g";
import {ManageEmployeeRequest} from "../../api/dto/ManageEmployeeRequest.g";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {AccessWorker} from "../../core/access-worker";
import {NotificationService} from "../../core/services/notification.service";
import {Router} from "@angular/router";
import {employeeListPath} from "../../core/path";
import {RolesActions} from "../actions/roles.actions";

@Injectable()
export class EmployeeEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(EmployeeActions.getList.started.type),
    map((action: Action<SearchEmployeeRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.search(params)).pipe(
          map((result) => EmployeeActions.getList.done({params, result})),
          catchError((error) => of(EmployeeActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetById: Observable<AnyAction> = this.actions$.pipe(
    ofType(EmployeeActions.getById.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getById(params)).pipe(
          switchMap((result) => {
            const roles = result.roles.map(item => item.id);

            return [
              RolesActions.getAccessById.done({params: roles, result: result.accessFromRoles}),
              EmployeeActions.getById.done({params, result})
            ];
          }),
          catchError((error) => of(EmployeeActions.getById.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Add: Observable<AnyAction> = this.actions$.pipe(
    ofType(EmployeeActions.add.started.type),
    map((action: Action<ManageEmployeeRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.add(params)).pipe(
          map((result) => {
            this.router.navigate([employeeListPath]).then(() =>
              this.notificationService.showSuccessMessage("Employee was successfully created")
            );

            return EmployeeActions.add.done({params, result});
          }),
          catchError((error) => of(EmployeeActions.add.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Update: Observable<AnyAction> = this.actions$.pipe(
    ofType(EmployeeActions.update.started.type),
    map((action: Action<ManageEmployeeRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.update(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Employee was successfully updated");
            this.router.navigate([employeeListPath]);

            return EmployeeActions.update.done({params, result});
          }),
          catchError((error) => of(EmployeeActions.update.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Ban: Observable<AnyAction> = this.actions$.pipe(
    ofType(EmployeeActions.setBan.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.EmployeeBlocking)) {
          this.notificationService.showAccessDenyModal();

          return of(EmployeeActions.setBan.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.banEmployee(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Employee was successfully banned");

            return EmployeeActions.setBan.done({params, result});
          }),
          catchError((error) => of(EmployeeActions.setBan.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  UnBan: Observable<AnyAction> = this.actions$.pipe(
    ofType(EmployeeActions.setUnBan.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.EmployeeBlocking)) {
          this.notificationService.showAccessDenyModal();

          return of(EmployeeActions.setUnBan.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.unBanEmployee(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Employee was successfully unbanned");

            return EmployeeActions.setUnBan.done({params, result});
          }),
          catchError((error) => of(EmployeeActions.setUnBan.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminEmployeeApiRequest,
    private accessWorker: AccessWorker,
    private notificationService: NotificationService,
    private router: Router
  ) {
  }
}
