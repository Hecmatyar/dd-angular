import {AdminPartnerUserFull} from "../../../api/dto/AdminPartnerUserFull.g";

export interface UpdatePartnerVendorRequest {
  request: AdminPartnerUserFull;
  w9: File;
}
