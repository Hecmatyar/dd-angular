import {Action} from "@ngrx/store";
import {AdminAuthenticationRequest} from "../../api/dto/AdminAuthenticationRequest.g";
import {AccessLevel} from "../../api/dto/AccessLevel.g";

export enum EAuthActions {
  LOGIN = "[Auth] Login",
  LOGIN_SUCCESS = "[Auth] Login Success",
  LOGIN_FAIL = "[Auth] Login Failure",
  LOGOUT = "[Auth] Logout",
  LOGOUT_SUCCESS = "[Auth] Logout Success",
  LOGOUT_FAIL = "[Auth] Logout Failure",
  GET_ACCESS_LEVEL_MAP = "[Auth] Get Access Level Map",
  GET_ACCESS_LEVEL_MAP_SUCCESS = "[Auth] Get Access Level Map Success",
  GET_ACCESS_LEVEL_MAP_FAIL = "[Auth] Get Access Level Map Failure",
}

export class Login implements Action {
  public readonly type = EAuthActions.LOGIN;

  constructor(public payload: AdminAuthenticationRequest) {
  }
}

export class LoginSuccess implements Action {
  readonly type = EAuthActions.LOGIN_SUCCESS;
}

export class LoginFailure implements Action {
  readonly type = EAuthActions.LOGIN_FAIL;

  constructor(public payload: string) {
  }
}

export class Logout implements Action {
  public readonly type = EAuthActions.LOGOUT;
}

export class LogoutSuccess implements Action {
  public readonly type = EAuthActions.LOGOUT_SUCCESS;
}

export class LogoutFailure implements Action {
  public readonly type = EAuthActions.LOGOUT_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAccessLevelMap implements Action {
  public readonly type = EAuthActions.GET_ACCESS_LEVEL_MAP;
}

export class GetAccessLevelMapSuccess implements Action {
  public readonly type = EAuthActions.GET_ACCESS_LEVEL_MAP_SUCCESS;

  constructor(public payload: AccessLevel[]) {
  }
}

export class GetAccessLevelMapFailure implements Action {
  readonly type = EAuthActions.GET_ACCESS_LEVEL_MAP_FAIL;

  constructor(public payload: string) {
  }
}

export type AuthActions = Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | LogoutSuccess
  | LogoutFailure
  | GetAccessLevelMap
  | GetAccessLevelMapSuccess
  | GetAccessLevelMapFailure;
