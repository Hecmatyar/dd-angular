import {IAppState} from "../../state/app.state";
import {createSelector} from "@ngrx/store";
import {initialPartnersVendorsState, IPartnersVendorsState} from "../../state/vendors/partners-vendors.state";

const selectVendors = (state: IAppState): IPartnersVendorsState => state.partnersVendors || initialPartnersVendorsState;

export const selectPartnersVendorsState = createSelector(
  selectVendors,
  (state: IPartnersVendorsState) => state
);

export const selectPartnersVendorsFilterState = createSelector(
  selectVendors,
  (state: IPartnersVendorsState) => state.filter
);

export const selectPartnersVendorState = createSelector(
  selectVendors,
  (state: IPartnersVendorsState) => state.vendor
);

export const selectPartnersVendorContentState = createSelector(
  selectVendors,
  (state: IPartnersVendorsState) => state.vendor.content
);
