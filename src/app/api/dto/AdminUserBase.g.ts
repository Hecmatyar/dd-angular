/*tslint:disable*/
import {CommentDto} from "./CommentDto.g";

export interface AdminUserBase {
    name: string;
    surname: string;
    company: string;
    taxId: string;
    ssn: string;
    w9: string;
    email: string;
    telephone: string;
    city: string;
    street: string;
    state: string;
    zip: string;
    comment: CommentDto;
}