import {Routes} from "@angular/router";
import {cardListPath} from "../../core/path";
import {CardsContainerComponent} from "./cards-container/cards-container.component";
import {AuthGuardService} from "../../core/services/auth/auth-guard.service";
import {AccessLevel} from "../../api/dto/AccessLevel.g";

export const cardsRoutes: Routes = [
  {
    path: cardListPath,
    component: CardsContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.CardPageView}
  }
];
