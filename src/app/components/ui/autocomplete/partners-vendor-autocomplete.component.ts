import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {AutocompleteComponent} from './autocomplete.component';
import {AdminVendorApiRequest} from "../../../api/AdminVendorApiRequest.g";

@Component({
  selector: 'app-partners-vendor-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersVendorAutocompleteComponent extends AutocompleteComponent {
  @Input() placeholder: string;

  constructor(
    private apiService: AdminVendorApiRequest,
    protected detect: ChangeDetectorRef
  ) {
    super(detect);
    this.placeholder = 'Vendor';
  }

  async loadOptions(): Promise<void> {
    this.filteredOptions = await this.apiService.autoCompletePartners(this.innerValue, 6);
  }
}
