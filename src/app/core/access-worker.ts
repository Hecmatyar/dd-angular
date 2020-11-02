import {AccessLevel} from "../api/dto/AccessLevel.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../store/state/app.state";
import {Observable} from "rxjs";
import {selectAuthAccessLevel} from "../store/selectors/auth.selector";
import {Injectable} from "@angular/core";
import {take} from "rxjs/operators";

@Injectable()
export class AccessWorker {
  public credentials: Observable<AccessLevel[]>;

  constructor(private store: Store<IAppState>) {
    this.credentials = this.store.select(selectAuthAccessLevel);
  }

  getCredentials(): AccessLevel[] {
    let credential = [];
    this.credentials.pipe(take(1)).subscribe(selectors => {
      credential = selectors;
    });

    return credential;
  }

  haveAccess(level: AccessLevel): boolean {
    return this.getCredentials().includes(level);
  }
}

// export const access = (level: AccessLevel): any => {
//   return function (target: any, key: any, descriptor: any): any {
//     console.log(target);
//     if (level !== AccessLevel.EmployeePageView) {
//       descriptor.value = function (): void {
//         // return newFunction.apply(this, arguments);
//         // target.getCredentials();
//         alert('no credentials');
//       };
//     }
//   };
// };

// export function checkAccess(role: string, roles: string[]): void {
//   if (!roles.includes(role)) {
//     throw new Error("");
//   }
// }
