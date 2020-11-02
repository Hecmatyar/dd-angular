import {AccessLevel} from "../../api/dto/AccessLevel.g";

export interface INavigationItem {
  title: string;
  routerLink?: string;
  children?: INavigationItem[];
  accessLevel: AccessLevel[];
}
