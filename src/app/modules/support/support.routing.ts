import {Routes} from "@angular/router";
import {AuthGuardService} from "../../core/services/auth/auth-guard.service";
import {
  supportChangeLogPath,
  supportPath,
  supportSettingsBonusPath,
  supportSettingsCardsPath,
  supportSettingsContentPath,
  supportSettingsDiscountPath,
  supportSettingsPath
} from "../../core/path";
import {SupportChangeLogContainerComponent} from "./support-change-log-container/support-change-log-container.component";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {SupportCardsContainerComponent} from "./support-settings/support-cards-container/support-cards-container.component";
import {SupportDiscountContainerComponent} from "./support-settings/support-discount-container/support-discount-container.component";
import {SupportBonusContainerComponent} from "./support-settings/support-bonus-container/support-bonus-container.component";
import {SupportContentContainerComponent} from "./support-settings/support-content-container/support-content-container.component";

export const supportRoutes: Routes = [
  {
    path: supportPath,
    redirectTo: supportChangeLogPath,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.AuditView},
  },
  {
    path: supportChangeLogPath,
    component: SupportChangeLogContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.AuditView},
  },
  {
    path: supportSettingsPath,
    redirectTo: supportSettingsCardsPath,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.SettingsViewCards},
  },
  {
    path: supportSettingsCardsPath,
    component: SupportCardsContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.SettingsViewCards},
  },
  {
    path: supportSettingsDiscountPath,
    component: SupportDiscountContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.SettingsViewDiscount},
  },
  {
    path: supportSettingsBonusPath,
    component: SupportBonusContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.SettingsViewBonusAndFunds},
  },
  {
    path: supportSettingsContentPath,
    component: SupportContentContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.SettingsViewContent},
  },
];
