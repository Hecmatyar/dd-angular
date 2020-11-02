import {Observable} from "rxjs";
import {AccessLevel} from "../../api/dto/AccessLevel.g";

export interface IHorizontalMenuItem {
  title: string;
  routerLink: string;
  credential?: AccessLevel;
  visible?: Observable<boolean>;
}
