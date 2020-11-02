import {Component, Input} from '@angular/core';
import {UserStatus} from "../../../api/dto/UserStatus.g";

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent {
  @Input() type: UserStatus;

  userStatus: typeof UserStatus;

  constructor() {
    this.type = UserStatus.Online;
    this.userStatus = UserStatus;
  }
}
