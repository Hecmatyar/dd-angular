import {IHorizontalMenuItem} from "../interfaces/gorizontal-menu-item";
import {
  transactionsOrderCreateBulkPath,
  transactionsOrderCreatePartnersPath,
  transactionsOrderCreateUserPath
} from "../path";
import {AccessLevel} from "../../api/dto/AccessLevel.g";

export const transactionsCreateRoutes: IHorizontalMenuItem[] = [
  {
    title: "Users",
    credential: AccessLevel.TransactionsCreateUser,
    routerLink: transactionsOrderCreateUserPath,
  },
  {
    title: "Bulk sales",
    credential: AccessLevel.TransactionsCreateBulkSell,
    routerLink: transactionsOrderCreateBulkPath,
  },
  {
    title: "Partners",
    credential: AccessLevel.TransactionsCreatePartners,
    routerLink: transactionsOrderCreatePartnersPath,
  },
];
