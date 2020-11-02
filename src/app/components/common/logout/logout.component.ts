import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {Logout} from "../../../store/actions/auth.actions";
import {selectAuthState} from "../../../store/selectors/auth.selector";
import {Observable} from "rxjs";
import {IAuthState} from "../../../store/state/auth.state";
import {Router} from "@angular/router";
import {loginPath} from "../../../core/path";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  authState: Observable<IAuthState>;

  constructor(private store: Store<IAppState>, private router: Router) {
    this.authState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.authState.subscribe(async state => {
      if (!state.isAuthorized) {
        await this.router.navigate([loginPath]);
      }
    });
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }
}
