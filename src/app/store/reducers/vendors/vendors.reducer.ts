import {VendorsActions} from "../../actions/vendors/vendors.actions";
import {initialVendorsState} from "../../state/vendors/vendors.state";
import {reducerWithInitialState} from "typescript-fsa-reducers";

export const vendorsReducer = reducerWithInitialState(initialVendorsState)
  .case(VendorsActions.getNotBannedVendorList.started, (state) => ({...state}))
  .case(VendorsActions.getNotBannedVendorList.done, (state, {result}) => {
    return {...state, notBannedVendorList: result};
  });
