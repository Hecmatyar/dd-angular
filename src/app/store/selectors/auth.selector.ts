import {IAppState} from "../state/app.state";
import {IAuthState} from "../state/auth.state";
import {createSelector} from "@ngrx/store";
import {AccessLevel} from "../../api/dto/AccessLevel.g";

const selectAuth = (state: IAppState): IAuthState => state.auth;

export const selectAuthState = createSelector(
  selectAuth,
  (state: IAuthState) => state
);

export const selectAuthStatus = createSelector(
  selectAuth,
  (state: IAuthState) => state.credentials && state.isAuthorized
);

export const selectAuthAccessLevel = createSelector(
  selectAuth,
  (state: IAuthState) => state.credentials
);

export const selectCredentialsStatus = createSelector(
  selectAuth,
  (state: IAuthState, props: AccessLevel) => {
    return state.credentials.includes(props);
  }
);
