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
import {AdminRole} from "../../../../../api/dto/AdminRole.g";
import {FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../../core/interfaces/content-loading";
import {AccessLevelMap} from "../../../../../api/dto/AccessLevelMap.g";
import {AccessBuilderComponent} from "../../../../common/access-builder/access-builder.component";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {NotificationService} from "../../../../../core/services/notification.service";
import {rolesListPath} from "../../../../../core/path";
import {selectAccessLevelState} from "../../../../../store/selectors/roles.selector";
import {RolesActions} from "../../../../../store/actions/roles.actions";
import {BaseForm} from "../../../../../core/base/base-form";
import {AccessLevel} from "../../../../../api/dto/AccessLevel.g";
import {accessLevels} from "../../../../../core/consts/roles-access-level";

@Component({
  selector: 'app-roles-form',
  templateUrl: './roles-form.component.html',
  styleUrls: ['./roles-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesFormComponent extends BaseForm implements OnInit, OnChanges {
  @Input() role: AdminRole;

  @Output() submitForm = new EventEmitter<AdminRole>();

  selectedRoles: AccessLevel[];
  accessLevelMap$: Observable<ContentLoading<AccessLevelMap>>;
  @ViewChild("accessBuilder") accessBuilder: AccessBuilderComponent;
  rolesArray: string[] = accessLevels;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private notificationService: NotificationService) {
    super();
    this.role = {} as AdminRole;
    this.backPath = rolesListPath;
    this.selectedRoles = [];
    this.accessLevelMap$ = this.store.select(selectAccessLevelState);
  }

  ngOnInit(): void {
    this.initForm(this.role || {} as AdminRole);
    this.store.dispatch(RolesActions.getAccessLevel.started());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.role && changes.role.currentValue) {
      this.initForm(changes.role.currentValue);
      this.fillSelectedRole();
    }
  }

  initForm(employee: AdminRole): void {
    this.form = this.fb.group({
      "name": [employee.name, [Validators.required]]
    });
  }

  applyForm(): void {
    this.markForm(this.form);
    if (this.form.invalid) {
      this.notificationService.showErrorMessage("The form is not valid");

      return;
    }

    const role: AdminRole = {...this.role, name: this.form.value.name};
    this.rolesArray.forEach(roleName => {
      if (!role[roleName]) {
        role[roleName] = {};
      }
    });

    this.submitForm.emit(role);
  }

  private fillSelectedRole(): void {
    this.selectedRoles = [];
    this.rolesArray.forEach(roleName => {
      if (this.role && this.role[roleName] && this.role[roleName].available) {
        this.role[roleName].available.forEach(item => this.selectedRoles.push(item));
      }
    });
  }

}
