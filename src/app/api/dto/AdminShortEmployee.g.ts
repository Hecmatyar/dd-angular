/*tslint:disable*/
import {EntityDto} from "./EntityDto.g";
import {AccessLevel} from "./AccessLevel.g";
import {UserStatus} from "./UserStatus.g";

export interface AdminShortEmployee {
    id: string;
    login: string;
    name: string;
    lastName: string;
    phone: string;
    roles: EntityDto[];
    additionalAccessLevels: AccessLevel[];
    additionalAccess: string;
    status: UserStatus;
}