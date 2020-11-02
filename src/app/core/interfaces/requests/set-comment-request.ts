import {SetCommentRequest} from "../../../api/dto/SetCommentRequest.g";

export interface SetOrderCommentRequest {
  orderId: string;
  request: SetCommentRequest;
}
