/*tslint:disable*/
import {AdminUserBase} from "./AdminUserBase.g";
import {PersonalIdType} from "./PersonalIdType.g";
import {UserType} from "./UserType.g";
import {PaymentMethod} from "./PaymentMethod.g";

export interface AdminMobileUserFull extends AdminUserBase {
    id: string;
    idType: PersonalIdType | null;
    personalId: string;
    type: UserType;
    lastActivityUtc: Date | string | null;
    banned: boolean;
    paymentMethods: PaymentMethod[];
}