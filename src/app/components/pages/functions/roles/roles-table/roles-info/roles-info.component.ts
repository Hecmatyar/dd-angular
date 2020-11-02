import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AdminRole} from "../../../../../../api/dto/AdminRole.g";
import {EntityDto} from "../../../../../../api/dto/EntityDto.g";
import {accessLevels} from "../../../../../../core/consts/roles-access-level";
import {AccessLevelInfo} from "../../../../../../api/dto/AccessLevelInfo.g";
import {rolesAccessLevelMap} from "../../../../../../core/consts/roles-access-level-map";

@Component({
  selector: 'app-roles-info',
  templateUrl: './roles-info.component.html',
  styleUrls: ['./roles-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesInfoComponent implements OnChanges {
  @Input() isLoading: boolean;
  @Input() roleInfo: AdminRole;

  info: EntityDto[];

  constructor() {
    this.info = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.roleInfo && changes.roleInfo.currentValue) {
      this.getEmployeeInfo(changes.roleInfo.currentValue as AdminRole);
    }
  }

  getEmployeeInfo(role: AdminRole): void {
    accessLevels.forEach(access => {
      this.info.push({id: rolesAccessLevelMap.get(access), name: (role[access] as AccessLevelInfo).available.join(", ") || "-"});
    });
  }
}
