/*tslint:disable*/
import {DiggiTaskAdditionalInfoContext} from "./DiggiTaskAdditionalInfoContext.g";

export interface DiggiTaskWithdrawContext extends DiggiTaskAdditionalInfoContext {
    amount: number;
    transactionNumber: number;
}