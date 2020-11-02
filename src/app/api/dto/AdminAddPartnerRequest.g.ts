/*tslint:disable*/
import {PersonalIdType} from "./PersonalIdType.g";
import {AdminUserBase} from "./AdminUserBase.g";
import {BrandCommission} from "./BrandCommission.g";
import {UserType} from "./UserType.g";
import {PaymentMethod} from "./PaymentMethod.g";

export interface AdminAddPartnerRequest extends AdminUserBase {
    idType: PersonalIdType | null;
    personalId: string;
    customCommissions: BrandCommission[];
    type: UserType;
    withdrawMethods: PaymentMethod[];
}