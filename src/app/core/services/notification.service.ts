import {Injectable} from "@angular/core";
import {NzMessageService, NzModalService, NzNotificationService} from "ng-zorro-antd";

@Injectable()
export class NotificationService {
  constructor(
    private nzNotification: NzNotificationService,
    private modalService: NzModalService,
    private message: NzMessageService) {

  }

  showError(message: string): void {
    this.nzNotification.blank(`<span class="text-error">Error</span>`, message);
  }

  showSuccess(message: string): void {
    this.nzNotification.blank(`<span class="text-success">Success</span>`, message);
  }

  showSuccessMessage(message: string): void {
    this.message.success(message || "Operation was successful");
  }

  showErrorMessage(message: string): void {
    this.message.error(message || "An error occurred while performing the operation");
  }

  showAccessDenyModal(): void {
    console.log("deny modal");
    const message = "You do not have the necessary access rights to perform this operation.";
    this.modalService.error({
      nzTitle: 'Error',
      nzContent: message,
      nzOkText: 'OK',
    });
  }

  showConfirmModal(message, callback): void {
    this.modalService.confirm({
      nzTitle: '<span class="title">Are you sure?</span>',
      nzContent:  message,
      nzClassName: 'base-modal',
      nzOkText: 'Accept',
      nzWidth: 460,
      nzBodyStyle: {padding: '16px 55px'},
      nzOnOk: callback
    })
  }

  showAlertModal(message): void {
    this.modalService.error({
      nzTitle: '<span class="title">Alert!</span>',
      nzContent: message,
      nzWidth: 460,
      nzClassName: 'base-modal alert',
      nzBodyStyle: {padding: '16px 55px'},
    });
  }
}
