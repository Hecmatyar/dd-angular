import {NgModule} from '@angular/core';
import {ClickOutsideDirective} from "./click-outside.directive";
import {PriceDirective} from './price.directive';
import {GraphicCounDirective} from "./graphic-coun.directive";

@NgModule({
  declarations: [
    ClickOutsideDirective,
    PriceDirective,
    GraphicCounDirective,
  ],
  imports: [],
  exports: [
    ClickOutsideDirective,
    PriceDirective,
    GraphicCounDirective,
  ],
  providers: [],
  bootstrap: []
})
export class DirectivesModule {
}
