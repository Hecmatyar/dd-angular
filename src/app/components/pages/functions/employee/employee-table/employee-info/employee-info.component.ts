import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DatePipe} from "@angular/common";
import {AdminEmployee} from "../../../../../../api/dto/AdminEmployee.g";
import {EntityDto} from "../../../../../../api/dto/EntityDto.g";

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss'],
  providers: [DatePipe]
})
export class EmployeeInfoComponent implements OnChanges {
  @Input() isLoading: boolean;
  @Input() employeeInfo: AdminEmployee;

  info: EntityDto[];

  constructor(private datePipe: DatePipe) {
    this.info = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.employeeInfo && changes.employeeInfo.currentValue) {
      this.getEmployeeInfo(changes.employeeInfo.currentValue as AdminEmployee);
    }
  }

  getEmployeeInfo(employee: AdminEmployee): void {
    this.info.push({id: 'login', name: employee.login});
    this.info.push({id: 'name', name: employee.name});
    this.info.push({id: 'last name', name: employee.lastName});
    this.info.push({id: 'e-mail', name: employee.email});
    this.info.push({id: 'phone', name: employee.telephone});
    this.info.push({id: 'roles', name: employee.roles.map(item => item.name).join(', ')});
    this.info.push({id: 'date of the create', name: this.datePipe.transform(employee.createDate, 'HH:mm MM/dd/yyyy')});
    this.info.push({id: 'last activity', name: this.datePipe.transform(employee.lastActivityDate, 'HH:mm MM/dd/yyyy')});
    this.info.push({id: 'status', name: employee.status});
  }
}
