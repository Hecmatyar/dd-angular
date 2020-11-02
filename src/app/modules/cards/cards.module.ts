import {NgModule} from '@angular/core';
import {CardsContainerComponent} from './cards-container/cards-container.component';
import {CardsService} from "../../core/services/cards.service";
import {CommonModule} from "@angular/common";
import {PagesModule} from "../../components/pages/pages.module";

@NgModule({
  declarations: [
    CardsContainerComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
  ],
  exports: [
    CardsContainerComponent
  ],
  providers: [
    CardsService,
  ],
  bootstrap: []
})
export class CardsModule {
}
