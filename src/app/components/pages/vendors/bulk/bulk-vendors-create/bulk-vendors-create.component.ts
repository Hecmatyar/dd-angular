import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {bulkVendorsCreatePath} from "../../../../../core/path";

@Component({
  selector: 'app-bulk-vendors-create',
  templateUrl: './bulk-vendors-create.component.html',
  styleUrls: ['./bulk-vendors-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkVendorsCreateComponent {
  @Input() createVendorCredential: boolean;

  constructor(private router: Router) {
  }

  async createBulkVendor(): Promise<void> {
    await this.router.navigate([bulkVendorsCreatePath]);
  }
}
