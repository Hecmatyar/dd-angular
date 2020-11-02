import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ButtonType} from "../../../core/enums/button-type.enum";

@Component({
  selector: 'app-form-footer-action',
  templateUrl: './form-footer-action.component.html',
  styleUrls: ['./form-footer-action.component.scss']
})
export class FormFooterActionComponent {
  @Input() backPath: string;
  @Input() disabled: boolean;

  @Output() apply = new EventEmitter<void>();

  buttonType: typeof ButtonType;

  constructor(private router: Router) {
    this.buttonType = ButtonType;
  }

  onCancel(): void {
    if (this.backPath) {
      this.router.navigate([this.backPath]);
    }
  }

  onApply(): void {
    this.apply.emit();
  }
}
