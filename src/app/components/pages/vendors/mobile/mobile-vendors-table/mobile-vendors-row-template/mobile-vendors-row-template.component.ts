import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AdminMobileUserItem} from "../../../../../../api/dto/AdminMobileUserItem.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../../store/state/app.state";
import {VendorsMobileActions} from "../../../../../../store/actions/vendors/mobile-vendors.actions";

@Component({
  selector: 'app-mobile-vendors-row-template',
  templateUrl: './mobile-vendors-row-template.component.html',
  styleUrls: ['./mobile-vendors-row-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileVendorsRowTemplateComponent {
  @Input() data: AdminMobileUserItem;

  constructor(protected store: Store<IAppState>) {
  }

  onW9Load(): void {
    //
  }

  onChangeComment(comment: string): void {
    this.store.dispatch(VendorsMobileActions.setComment.started({vendorId: this.data.id, request: {text: comment}}));
  }
}
