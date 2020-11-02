import {IHorizontalMenuItem} from "../interfaces/gorizontal-menu-item";
import {
  supportSettingsBonusPath,
  supportSettingsCardsPath,
  supportSettingsContentPath,
  supportSettingsDiscountPath
} from "../path";
import {AccessLevel} from "../../api/dto/AccessLevel.g";

export const supportRoutes: IHorizontalMenuItem[] = [
  {
    title: "Cards",
    routerLink: supportSettingsCardsPath,
    credential: AccessLevel.SettingsViewCards
  },
  {
    title: "Discount",
    routerLink: supportSettingsDiscountPath,
    credential: AccessLevel.SettingsViewDiscount
  },
  {
    title: "Bonus & Funds",
    routerLink: supportSettingsBonusPath,
    credential: AccessLevel.SettingsViewBonusAndFunds
  },
  {
    title: "Content",
    routerLink: supportSettingsContentPath,
    credential: AccessLevel.SettingsViewContent
  }
];
