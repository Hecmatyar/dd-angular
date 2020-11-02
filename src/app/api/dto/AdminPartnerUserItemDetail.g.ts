/*tslint:disable*/

export interface AdminPartnerUserItemDetail {
    taxId: string;
    ssn: string;
    w9: string;
    email: string;
    telephone: string;
    city: string;
    street: string;
    state: string;
    zip: string;
    lastActivityUtc: Date | string | null;
}