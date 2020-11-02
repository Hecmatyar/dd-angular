import {ChangeDetectorRef, Component} from '@angular/core';
import {AutocompleteComponent} from './autocomplete.component';
import {AdminEmployeeApiRequest} from "../../../api/AdminEmployeeApiRequest.g";

@Component({
  selector: 'app-employee-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less'],
})
export class EmployeeAutocompleteComponent extends AutocompleteComponent {
  constructor(private employeeService: AdminEmployeeApiRequest, protected detect: ChangeDetectorRef) {
    super(detect);
    this.placeholder = 'Employee';
  }

  async loadOptions(): Promise<void> {
    this.filteredOptions = await this.employeeService.autoComplete(this.innerValue, 6);
  }
}
