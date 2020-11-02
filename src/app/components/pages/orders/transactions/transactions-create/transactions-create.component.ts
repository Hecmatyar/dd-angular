import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {
  employeeListPath,
  transactionsOrderCreateBulkPath,
  transactionsOrderCreatePartnersPath,
  transactionsOrderCreateUserPath
} from "../../../../../core/path";

@Component({
  selector: 'app-transactions-create',
  templateUrl: './transactions-create.component.html',
  styleUrls: ['./transactions-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsCreateComponent {
  @Input() createMobileCredential: boolean;
  @Input() createPartnerCredential: boolean;
  @Input() createBulkCredential: boolean;

  constructor(private router: Router) {
  }

  async createPartnersOrder(): Promise<void> {
    const path = this.createMobileCredential
      ? transactionsOrderCreateUserPath : this.createPartnerCredential
        ? transactionsOrderCreatePartnersPath : this.createBulkCredential
          ? transactionsOrderCreateBulkPath : employeeListPath;
    await this.router.navigate([path]);
  }
}
