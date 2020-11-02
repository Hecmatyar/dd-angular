import {IAppState} from "../../state/app.state";
import {createSelector} from "@ngrx/store";
import {IBulkVendorsState, initialBulkVendorsState} from "../../state/vendors/bulk-vendors.state";

const selectVendors = (state: IAppState): IBulkVendorsState => state.bulkVendors || initialBulkVendorsState;

export const selectBulkVendorsState = createSelector(
  selectVendors,
  (state: IBulkVendorsState) => state
);

export const selectBulkVendorsFilterState = createSelector(
  selectVendors,
  (state: IBulkVendorsState) => state.filter
);

export const selectBulkVendorState = createSelector(
  selectVendors,
  (state: IBulkVendorsState) => state.vendor
);

export const selectBulkVendorContentState = createSelector(
  selectVendors,
  (state: IBulkVendorsState) => state.vendor.content
);
