import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../store/state/app.state";
import {IAuthState} from "../store/state/auth.state";
import {Observable} from "rxjs";
import {selectAuthState, selectAuthStatus} from "../store/selectors/auth.selector";
import {Login} from "../store/actions/auth.actions";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  passwordVisible: boolean;

  authForm: FormGroup;
  isDisabled: boolean;
  isLoading: boolean;
  submitted: boolean;
  errorMessage: string;
  authState: Observable<IAuthState>;
  isAuthorized: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {
    this.passwordVisible = false;
    this.isLoading = false;
    this.authState = this.store.select(selectAuthState);
    this.isAuthorized = this.store.select(selectAuthStatus);
  }

  ngOnInit(): void {
    this.createForm();

    this.isAuthorized.subscribe(async state => {
      if (state) {
        this.isLoading = false;
      }
    });

    this.authState.subscribe(state => {
      if (state.errorMessage) {
        this.errorMessage = state.errorMessage;
        this.isLoading = false;
      }
    });
  }

  valid(name: string): boolean {
    return (this.authForm.get(name).dirty && !this.authForm.get(name).valid || !!this.errorMessage);
  }

  submit($event: Event): void {
    $event.preventDefault();
    this.isLoading = true;
    this.submitted = true;

    if (this.authForm.invalid) {
      [].forEach.call(Object.keys(this.authForm.controls), (key) => {
        this.authForm.controls[key].markAsTouched();
      });

      return;
    }

    this.store.dispatch(new Login(this.authForm.value));
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authForm.valueChanges.subscribe(() => {
      this.isDisabled = !this.authForm.valid;
    });
  }
}
