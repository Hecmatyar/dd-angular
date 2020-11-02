import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {EditIconComponent} from './edit-icon/edit-icon.component';
import {DeleteIconComponent} from './delete-icon/delete-icon.component';
import {PlusIconComponent} from './plus-icon/plus-icon.component';
import {MinusIconComponent} from './minus-icon/minus-icon.component';
import {InfoIconComponent} from './info-icon/info-icon.component';
import {DebitIconComponent} from './debit-icon/debit-icon.component';
import {CreditIconComponent} from './credit-icon/credit-icon.component';
import {BanIconComponent} from './ban-icon/ban-icon.component';
import {AddIconComponent} from './add-icon/add-icon.component';
import {UploadIconComponent} from './upload-icon/upload-icon.component';
import {PriorityIconComponent} from './priority-icon/priority-icon.component';

@NgModule({
  declarations: [
    EditIconComponent,
    DeleteIconComponent,
    PlusIconComponent,
    MinusIconComponent,
    InfoIconComponent,
    DebitIconComponent,
    CreditIconComponent,
    BanIconComponent,
    AddIconComponent,
    UploadIconComponent,
    PriorityIconComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DebitIconComponent,
    CreditIconComponent,
    PlusIconComponent,
    AddIconComponent,
    DeleteIconComponent,
    MinusIconComponent,
    EditIconComponent,
    BanIconComponent,
    InfoIconComponent,
    UploadIconComponent,
    PriorityIconComponent,
  ],
  providers: [],
  bootstrap: []
})
export class IconsModule {
}
