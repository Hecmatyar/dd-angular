import {BaseState} from "../../core/interfaces/base/base-state";
import {AdminSearchAuditRequest} from "../../api/dto/AdminSearchAuditRequest.g";
import {AuditInfoDto} from "../../api/dto/AuditInfoDto.g";
import {AdminCardsSetting} from "../../api/dto/AdminCardsSetting.g";
import {AdminDiscountSetting} from "../../api/dto/AdminDiscountSetting.g";
import {AdminContentSetting} from "../../api/dto/AdminContentSetting.g";
import {AdminBonusSetting} from "../../api/dto/AdminBonusSetting.g";

export interface ISupportState extends BaseState {
  filter: AdminSearchAuditRequest;
  items: AuditInfoDto[];
  totalItems: number;
  card: AdminCardsSetting;
  discount: AdminDiscountSetting;
  content: AdminContentSetting;
  bonus: AdminBonusSetting;
}

const defaultFilter = {
  paged: {
    page: 1,
    pageSize: 50
  },
};

export const initialSupportState: ISupportState = {
  filter: { ...defaultFilter } as AdminSearchAuditRequest,
  items: [],
  isLoading: true,
  totalItems: 0,
  card: null,
  discount: null,
  content: null,
  bonus: null,
};
