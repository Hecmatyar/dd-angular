import {IAuthState, initialAuthState} from "../state/auth.state";
import {AuthActions, EAuthActions} from "../actions/auth.actions";

export const authReducer = (
  state = initialAuthState,
  action: AuthActions,
): IAuthState => {
  switch (action.type) {
    case EAuthActions.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthorized: true,
      };
    }
    case EAuthActions.LOGIN_FAIL: {
      return {
        ...state,
        isAuthorized: false,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case EAuthActions.GET_ACCESS_LEVEL_MAP_SUCCESS: {
      return {
        ...state,
        credentials: action.payload,
      };
    }
    case EAuthActions.GET_ACCESS_LEVEL_MAP_FAIL: {
      return {
        ...state,
        errorMessage: action.payload || "Failed to get access level map",
      };
    }
    case EAuthActions.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthorized: false,
      };
    }
    case EAuthActions.LOGOUT_FAIL: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
