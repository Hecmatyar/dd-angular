import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ManageEmployeeRequest} from "../../../../../api/dto/ManageEmployeeRequest.g";
import {AdminEmployee} from "../../../../../api/dto/AdminEmployee.g";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {employeeListPath} from "../../../../../core/path";
import {Select} from "../../../../../core/interfaces/select";
import {AccessLevelMap} from "../../../../../api/dto/AccessLevelMap.g";
import {
  selectAccessLevelState,
  selectRoleListState,
  selectRolesAccessLevelState
} from "../../../../../store/selectors/roles.selector";
import {Observable} from "rxjs";
import {RolesActions} from "../../../../../store/actions/roles.actions";
import {ContentLoading} from "../../../../../core/interfaces/content-loading";
import {AccessBuilderComponent} from "../../../../common/access-builder/access-builder.component";
import {EntityDto} from "../../../../../api/dto/EntityDto.g";
import {NotificationService} from "../../../../../core/services/notification.service";
import {emailParser} from "../../../../../core/consts/email-pareser";
import {BaseForm} from "../../../../../core/base/base-form";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent extends BaseForm implements OnInit, OnChanges {
  @Input() employee: AdminEmployee;

  @Output() submitForm = new EventEmitter<ManageEmployeeRequest>();

  accessLevelMap$: Observable<ContentLoading<AccessLevelMap>>;
  rolesAccessLevelMap$: Observable<ContentLoading<AccessLevelMap>>;
  selectableItems$: Observable<EntityDto[]>;
  @ViewChild("accessBuilder") accessBuilder: AccessBuilderComponent;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private notificationService: NotificationService) {
    super();
    this.backPath = employeeListPath;
  }

  get selectRoleArray(): FormArray {
    return this.form.get("roles") as FormArray;
  }

  ngOnInit(): void {
    this.initForm(this.employee || {roles: []} as AdminEmployee);
    this.store.dispatch(RolesActions.getAccessLevel.started());
    this.store.dispatch(RolesActions.getAll.started());
    this.accessLevelMap$ = this.store.select(selectAccessLevelState);
    this.rolesAccessLevelMap$ = this.store.select(selectRolesAccessLevelState);
    this.selectableItems$ = this.store.select(selectRoleListState);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.employee && changes.employee.currentValue) {
      this.initForm(changes.employee.currentValue);
    }
  }

  initForm(employee: AdminEmployee): void {
    const roles = employee.roles.length
      ? employee.roles.map(role => this.fb.group({key: [role.id, [Validators.required]]}))
      : [this.fb.group({key: [null, [Validators.required]]})];

    this.form = this.fb.group({
      "name": [employee.name, [Validators.required]],
      "lastName": [employee.lastName, [Validators.required]],
      "login": [employee.login, [Validators.required]],
      "email": [employee.email, [Validators.required, Validators.pattern(emailParser)]],
      "telephone": [employee.telephone, [Validators.required, Validators.pattern(/^\+\d{11}/)]],
      "roles": this.fb.array(roles)
    });
  }

  getSelectable(items: EntityDto[]): Select[] {
    return items.map(item => ({key: item.id, value: item.name}));
  }

  updateAccessLevel(): void {
    const keys = [];
    (this.form.get("roles").value || []).forEach(item => item.key && keys.push(item.key));
    this.store.dispatch(RolesActions.getAccessById.started(keys));
  }

  applyForm(): void {
    this.markForm(this.form);
    (<FormArray>this.form.get('roles')).controls
      .forEach((fg: FormGroup) => this.markForm(fg));

    if (this.form.invalid || !this.isRolesValid() || !this.accessBuilder) {
      this.notificationService.showErrorMessage("The form is not valid");

      return;
    }

    const accessRight = this.accessBuilder.getAdditionalSelectedAccessLevel();
    const employee = {
      ...this.employee,
      ...this.form.value,
      additionalAccess: accessRight,
      roles: this.form.value.roles.map(item => item.key).filter(key => key)
    };
    this.submitForm.emit(employee);
  }

  isRolesValid(): boolean {
    return (this.form.get("roles").value || []).some(item => !!item.key);
  }
}
