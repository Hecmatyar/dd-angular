import {ChangeDetectorRef, Component} from '@angular/core';
import {AutocompleteComponent} from './autocomplete.component';
import {AdminBrandApiRequest} from "../../../api/AdminBrandApiRequest.g";

@Component({
  selector: 'app-brand-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less'],
})
export class BrandAutocompleteComponent extends AutocompleteComponent {
  constructor(private brandService: AdminBrandApiRequest, protected detect: ChangeDetectorRef) {
    super(detect);
    this.placeholder = 'Brand';
  }

  async loadOptions(): Promise<void> {
    this.filteredOptions = await this.brandService.autoComplete(this.innerValue, 6);
  }
}
