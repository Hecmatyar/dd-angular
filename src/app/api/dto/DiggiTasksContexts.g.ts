/*tslint:disable*/
import {DiggiTaskAdditionalInfoContext} from "./DiggiTaskAdditionalInfoContext.g";
import {DiggiTaskCardInfoContext} from "./DiggiTaskCardInfoContext.g";
import {DiggiTaskContactUsContext} from "./DiggiTaskContactUsContext.g";
import {DiggiTaskInvestigationContext} from "./DiggiTaskInvestigationContext.g";
import {DiggiTaskLoadedPartnersContext} from "./DiggiTaskLoadedPartnersContext.g";
import {DiggiTaskOrderCheckContext} from "./DiggiTaskOrderCheckContext.g";
import {DiggiTaskPartnersOrderCheckedContext} from "./DiggiTaskPartnersOrderCheckedContext.g";
import {DiggiTaskPendingSaleCheckUsersContext} from "./DiggiTaskPendingSaleCheckUsersContext.g";
import {DiggiTaskPersonalContext} from "./DiggiTaskPersonalContext.g";
import {DiggiTaskW9CheckContext} from "./DiggiTaskW9CheckContext.g";
import {DiggiTaskWithdrawContext} from "./DiggiTaskWithdrawContext.g";

export interface DiggiTasksContexts {
    additionalInfoContext: DiggiTaskAdditionalInfoContext;
    cardInfoContext: DiggiTaskCardInfoContext;
    contactUsContext: DiggiTaskContactUsContext;
    investigationContext: DiggiTaskInvestigationContext;
    loadedPartnersContext: DiggiTaskLoadedPartnersContext;
    orderCheckContext: DiggiTaskOrderCheckContext;
    partnersOrderCheckedContext: DiggiTaskPartnersOrderCheckedContext;
    pendingSaleCheckUsersContext: DiggiTaskPendingSaleCheckUsersContext;
    personalContext: DiggiTaskPersonalContext;
    w9CheckContext: DiggiTaskW9CheckContext;
    taskWithdrawContext: DiggiTaskWithdrawContext;
}