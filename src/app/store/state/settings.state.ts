import {BaseState} from "../../core/interfaces/base/base-state";
import {ContentLoading, initialContentLoading} from "../../core/interfaces/content-loading";
import {AdminCardsSetting} from "../../api/dto/AdminCardsSetting.g";
import {AdminDiscountSetting} from "../../api/dto/AdminDiscountSetting.g";
import {AdminContentSetting} from "../../api/dto/AdminContentSetting.g";
import {AdminBonusSetting} from "../../api/dto/AdminBonusSetting.g";
import {AdminPaymentSettings} from "../../api/dto/AdminPaymentSettings.g";

export interface ISettingsState extends BaseState {
  cards: ContentLoading<AdminCardsSetting>;
  discount: ContentLoading<AdminDiscountSetting>;
  content: ContentLoading<AdminContentSetting>;
  bonus: ContentLoading<AdminBonusSetting>;
  payment: ContentLoading<AdminPaymentSettings>;
}

export const initialSettingsState: ISettingsState = {
  isLoading: false,
  cards: initialContentLoading,
  discount: initialContentLoading,
  content: initialContentLoading,
  bonus: initialContentLoading,
  payment: initialContentLoading,
};
