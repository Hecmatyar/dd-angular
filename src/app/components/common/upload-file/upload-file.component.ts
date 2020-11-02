import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  @Input() title: string;
  @Input() accept: string;
  @Input() disabled: boolean;

  @Output() file = new EventEmitter<File>();

  constructor() {
    //empty
  }

  onUpload(file: File): void {
    this.file.emit(file);
  }
}
