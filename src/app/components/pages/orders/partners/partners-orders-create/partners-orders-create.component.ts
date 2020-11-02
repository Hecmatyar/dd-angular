import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {partnersOrderCreatePath} from "../../../../../core/path";

@Component({
  selector: 'app-partners-orders-create',
  templateUrl: './partners-orders-create.component.html',
  styleUrls: ['./partners-orders-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersOrdersCreateComponent {
  @Input() createOrderCredential: boolean;

  constructor(private router: Router) {
  }

  async createPartnersOrder(): Promise<void> {
    await this.router.navigate([partnersOrderCreatePath]);
  }
}
