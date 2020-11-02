import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonType} from "../../../../../core/enums/button-type.enum";
import {AdminContentSetting} from "../../../../../api/dto/AdminContentSetting.g";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-support-content',
  templateUrl: './support-content.component.html',
  styleUrls: ['./support-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportContentComponent {
  @Output() onSave = new EventEmitter<AdminContentSetting>();
  @Input() settings: AdminContentSetting;
  @Input() isLoading: boolean = false;
  buttonType: typeof ButtonType = ButtonType;
  public Editor = ClassicEditor;

  constructor() {
  }

  questionChange(value): void {
    this.settings.faq = value;
  }

  problemsChange(problems): void {
    this.settings.typicalProblemList = problems;
  }

  onSubmit() {
    this.onSave.emit(this.settings);
  }
}
