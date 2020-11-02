import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {AutocompleteComponent} from './autocomplete.component';
import {AdminVendorApiRequest} from "../../../api/AdminVendorApiRequest.g";

@Component({
  selector: 'app-transactions-vendor-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsVendorAutocompleteComponent extends AutocompleteComponent {
  constructor(
    private apiService: AdminVendorApiRequest,
    protected detect: ChangeDetectorRef
  ) {
    super(detect);
    this.placeholder = 'Vendor';
  }

  async loadOptions(): Promise<void> {
    this.filteredOptions = await this.apiService.autoCompleteBulkSellers(this.innerValue, 6);
  }
}
