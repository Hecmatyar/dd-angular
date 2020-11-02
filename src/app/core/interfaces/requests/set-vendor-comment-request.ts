import {SetCommentRequest} from "../../../api/dto/SetCommentRequest.g";

export interface SetVendorCommentRequest {
  vendorId: string;
  request: SetCommentRequest;
}
