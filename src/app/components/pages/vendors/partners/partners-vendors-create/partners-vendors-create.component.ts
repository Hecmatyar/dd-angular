import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {partnersVendorsCreatePath} from "../../../../../core/path";

@Component({
  selector: 'app-partners-vendors-create',
  templateUrl: './partners-vendors-create.component.html',
  styleUrls: ['./partners-vendors-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersVendorsCreateComponent {
  @Input() createOrderCredential: boolean;

  constructor(private router: Router) {
  }

  async createPartnersVendor(): Promise<void> {
    await this.router.navigate([partnersVendorsCreatePath]);
  }
}
