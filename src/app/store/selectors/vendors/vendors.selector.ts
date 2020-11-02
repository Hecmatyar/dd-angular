import {IAppState} from "../../state/app.state";
import {createSelector} from "@ngrx/store";
import {initialVendorsState, IVendorsState} from "../../state/vendors/vendors.state";

const selectVendors = (state: IAppState): IVendorsState => state.vendors || initialVendorsState;

export const selectVendorsState = createSelector(
  selectVendors,
  (state: IVendorsState) => state
);

export const selectVendorsNotBannedListState = createSelector(
  selectVendors,
  (state: IVendorsState) => state.notBannedVendorList
);
