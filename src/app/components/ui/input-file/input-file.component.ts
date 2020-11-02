import {Component, Input} from '@angular/core';
import {BaseFormControl} from "../base-form-control";

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent extends BaseFormControl {
  @Input() text: string;
  @Input() id: string;
  @Input() accept: string;

  constructor() {
    super();
    this.text = '';
    this.id = "file";
  }

  setFile(file: File): void {
    this.parentForm.patchValue({[this.controlName]: file});
  }
}
