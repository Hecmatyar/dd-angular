import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {AnyAction} from "typescript-fsa";
import {TasksActions} from "../actions/tasks.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {DiggiTaskSearchRequest} from "../../api/dto/DiggiTaskSearchRequest.g";
import {Action} from "typescript-fsa/src/index";
import {AdminDiggiTaskApiRequest} from "../../api/AdminDiggiTaskApiRequest.g";
import {DiggiTaskSolveRequest} from "../../api/dto/DiggiTaskSolveRequest.g";
import {DiggiTaskAddMeRequest} from "../../api/dto/DiggiTaskAddMeRequest.g";
import {AccessWorker} from "../../core/access-worker";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {NotificationService} from "../../core/services/notification.service";
import {AdminCreateTaskRequest} from "../../api/dto/AdminCreateTaskRequest.g";

@Injectable()
export class TasksEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(TasksActions.search.started.type),
    map((action: Action<DiggiTaskSearchRequest>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.search(params)).pipe(
        map((result) => TasksActions.search.done({params, result})),
        catchError((error) => of(TasksActions.search.failed({params, error})))
      );
    })
  );

  @Effect()
  OpenTask: Observable<AnyAction> = this.actions$.pipe(
    ofType(TasksActions.openTask.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
      if (!this.accessWorker.haveAccess(AccessLevel.TaskOpenAll)) {
        this.notificationService.showAccessDenyModal();

        return of(TasksActions.openTask.failed({params, error: ({message: "Access denied"} as Error)}));
      }
      
      return from(this.apiRequest.getById(params)).pipe(
        map(result => TasksActions.openTask.done({params, result})),
        catchError(error => of(TasksActions.openTask.failed({params, error})))
      )
    })
  );

  @Effect()
  solve: Observable<AnyAction> = this.actions$.pipe(
    ofType(TasksActions.solve.started.type),
    map((action: Action<DiggiTaskSolveRequest>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.solve(params)).pipe(
        map(result => TasksActions.solve.done({params, result})),
        catchError(error => of(TasksActions.solve.failed({params, error})))
      )
    })
  );

  @Effect()
  addMe: Observable<AnyAction> = this.actions$.pipe(
    ofType(TasksActions.addMe.started.type),
    map((action: Action<DiggiTaskAddMeRequest>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.addMe(params)).pipe(
        map(result => TasksActions.addMe.done({params, result})),
        catchError(error => {
          if (error.indexOf('500')  !== -1)
            this.notificationService.showAlertModal('This task is already taken.');
          else this.notificationService.showAlertModal('No any permission to take this task.');

          return of(TasksActions.addMe.failed({params, error}))
        })
      )
    })
  );

  @Effect()
  create: Observable<AnyAction> = this.actions$.pipe(
    ofType(TasksActions.create.started.type),
    map((action: Action<AdminCreateTaskRequest>) => action.payload),
    switchMap(params => {
      return from(this.apiRequest.create(params)).pipe(
        map(result => TasksActions.create.done({params, result})),
        catchError(error => of(TasksActions.create.failed({params, error})))
      )
    })
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminDiggiTaskApiRequest,
    private accessWorker: AccessWorker,
    private notificationService: NotificationService,
  ) {
  }
}
