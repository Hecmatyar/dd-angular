import {ChangeDetectorRef, Component} from '@angular/core';
import {AutocompleteComponent} from './autocomplete.component';
import {AdminVendorApiRequest} from "../../../api/AdminVendorApiRequest.g";

@Component({
  selector: 'app-buyer-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less'],
})
export class BuyerAutocompleteComponent extends AutocompleteComponent {
  constructor(private apiRequest: AdminVendorApiRequest, protected detect: ChangeDetectorRef) {
    super(detect);
    this.placeholder = 'Buyer';
  }

  async loadOptions(): Promise<void> {
    this.filteredOptions = await this.apiRequest.autoCompleteVendors(this.innerValue, 6);
  }
}
