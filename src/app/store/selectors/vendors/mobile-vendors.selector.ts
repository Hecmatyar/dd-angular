import {IAppState} from "../../state/app.state";
import {createSelector} from "@ngrx/store";
import {IMobileVendorsState, initialMobileVendorsState} from "../../state/vendors/mobile-vendors.state";

const selectVendors = (state: IAppState): IMobileVendorsState => state.mobileVendors || initialMobileVendorsState;

export const selectMobileVendorsState = createSelector(
  selectVendors,
  (state: IMobileVendorsState) => state
);

export const selectMobileVendorsFilterState = createSelector(
  selectVendors,
  (state: IMobileVendorsState) => state.filter
);

export const selectMobileVendorState = createSelector(
  selectVendors,
  (state: IMobileVendorsState) => state.vendor
);

export const selectMobileVendorContentState = createSelector(
  selectVendors,
  (state: IMobileVendorsState) => state.vendor.content
);
