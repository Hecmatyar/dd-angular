import {AccessLevel} from "../../api/dto/AccessLevel.g";

export interface IAuthState {
  isAuthorized: boolean;
  credentials?: AccessLevel[];
  errorMessage?: string;
}

export const initialAuthState: IAuthState = {
  isAuthorized: false,
};
