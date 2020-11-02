import {Component, Input} from '@angular/core';
import {FileSaver} from "../../../core/interfaces/filte-saver";
import {NzMessageService} from "ng-zorro-antd";
import {ButtonType} from "../../../core/enums/button-type.enum";

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.scss'],
})
export class DownloadFileComponent {
  @Input() title: string;
  @Input() type: string;
  @Input() name: string;
  //tslint:disable-next-line:no-any
  @Input() filter: any;
  @Input() request: Function;

  isLoading: boolean;
  buttonType: typeof ButtonType;

  constructor(private message: NzMessageService) {
    this.buttonType = ButtonType;
  }

  static writeFile(fileSaver: FileSaver): void {
    const blob = new Blob([fileSaver.data], {type: fileSaver.type});
    const blobUrl = URL.createObjectURL(blob);

    const element = document.createElement('a');
    element.setAttribute('href', blobUrl);
    element.setAttribute('download', `${fileSaver.name}.${fileSaver.type}`);

    const event = new MouseEvent('click');
    element.dispatchEvent(event);
  }

  async onDownload(): Promise<void> {
    this.isLoading = true;
    const messageId = this.message.loading('Action in progress', {nzDuration: 0}).messageId;

    try {
      const result = await this.request(this.filter);
      this.message.remove(messageId);
      this.message.success('Loading finished', {nzDuration: 2500});
      DownloadFileComponent.writeFile({name: this.name, data: result, type: this.type});
    } catch {
      this.message.error('Loading failed', {nzDuration: 2500});
    }
    this.isLoading = false;
  }
}
