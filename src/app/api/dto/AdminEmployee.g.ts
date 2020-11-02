/*tslint:disable*/
import {EntityDto} from "./EntityDto.g";
import {UserStatus} from "./UserStatus.g";
import {AccessLevel} from "./AccessLevel.g";
import {AccessLevelMap} from "./AccessLevelMap.g";

export interface AdminEmployee {
    id: string;
    name: string;
    lastName: string;
    login: string;
    email: string;
    telephone: string;
    roles: EntityDto[];
    createDate: Date | string;
    lastActivityDate: Date | string | null;
    status: UserStatus;
    allAllowed: AccessLevel[];
    accessFromRoles: AccessLevelMap;
}