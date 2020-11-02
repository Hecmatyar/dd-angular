import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {brandCreatePath} from "../../../../core/path";

@Component({
  selector: 'app-brands-create',
  templateUrl: './brands-create.component.html',
  styleUrls: ['./brands-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsCreateComponent {
  @Input() createCredential: boolean;

  constructor(private router: Router) {
  }

  async createBrand(): Promise<void> {
    await this.router.navigate([brandCreatePath]);
  }
}
