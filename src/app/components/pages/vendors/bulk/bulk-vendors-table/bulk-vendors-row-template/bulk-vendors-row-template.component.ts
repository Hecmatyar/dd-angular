import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AdminBulkUserItem} from "../../../../../../api/dto/AdminBulkUserItem.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../../store/state/app.state";
import {VendorsBulkActions} from "../../../../../../store/actions/vendors/bulk-vendors.actions";

@Component({
  selector: 'app-bulk-vendors-row-template',
  templateUrl: './bulk-vendors-row-template.component.html',
  styleUrls: ['./bulk-vendors-row-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkVendorsRowTemplateComponent {
  @Input() data: AdminBulkUserItem;

  constructor(protected store: Store<IAppState>) {
  }

  onW9Load(): void {
    //
  }

  onChangeComment(comment: string): void {
    this.store.dispatch(VendorsBulkActions.setComment.started({vendorId: this.data.id, request: {text: comment}}));
  }
}
