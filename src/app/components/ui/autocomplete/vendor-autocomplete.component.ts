import {ChangeDetectorRef, Component} from '@angular/core';
import {AutocompleteComponent} from './autocomplete.component';
import {AdminVendorApiRequest} from "../../../api/AdminVendorApiRequest.g";

@Component({
  selector: 'app-vendor-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less'],
})
export class VendorAutocompleteComponent extends AutocompleteComponent {
  constructor(
    private vendorService: AdminVendorApiRequest,
    protected detect: ChangeDetectorRef) {
    super(detect);
    this.placeholder = 'Vendor';
  }

  async loadOptions(): Promise<void> {
    this.filteredOptions = await this.vendorService.autoCompleteVendors(this.innerValue, 6);
  }
}
