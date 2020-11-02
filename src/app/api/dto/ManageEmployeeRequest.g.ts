/*tslint:disable*/
import {AccessLevel} from "./AccessLevel.g";

export interface ManageEmployeeRequest {
    id: string | null;
    name: string;
    lastName: string;
    login: string;
    email: string;
    telephone: string;
    roles: string[];
    additionalAccess: AccessLevel[];
}