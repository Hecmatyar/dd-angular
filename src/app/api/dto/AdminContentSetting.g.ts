/*tslint:disable*/
import {FaqItem} from "./FaqItem.g";

export interface AdminContentSetting {
    faq: FaqItem[];
    typicalProblemList: string[];
    contactUsProblemList: string[];
    aboutUs: string;
    policyTermsAndConditions: string;
}