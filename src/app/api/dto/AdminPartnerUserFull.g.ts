/*tslint:disable*/
import {AdminUserBase} from "./AdminUserBase.g";
import {UserType} from "./UserType.g";
import {PersonalIdType} from "./PersonalIdType.g";
import {BrandCommission} from "./BrandCommission.g";
import {PaymentMethod} from "./PaymentMethod.g";

export interface AdminPartnerUserFull extends AdminUserBase {
    id: string;
    type: UserType;
    idType: PersonalIdType | null;
    personalId: string;
    lastActivityUtc: Date | string | null;
    customCommissions: BrandCommission[];
    withdrawMethods: PaymentMethod[];
}