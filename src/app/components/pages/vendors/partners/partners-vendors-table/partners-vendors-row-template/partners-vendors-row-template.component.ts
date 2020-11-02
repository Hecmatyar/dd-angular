import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AdminPartnerUserItem} from "../../../../../../api/dto/AdminPartnerUserItem.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../../store/state/app.state";
import {VendorsPartnersActions} from "../../../../../../store/actions/vendors/partners-vendors.actions";

@Component({
  selector: 'app-partners-vendors-row-template',
  templateUrl: './partners-vendors-row-template.component.html',
  styleUrls: ['./partners-vendors-row-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersVendorsRowTemplateComponent {
  @Input() data: AdminPartnerUserItem;

  constructor(protected store: Store<IAppState>) {
  }

  onW9Load(): void {
    //
  }

  onChangeComment(comment: string): void {
    this.store.dispatch(VendorsPartnersActions.setComment.started({vendorId: this.data.id, request: {text: comment}}));
  }
}
