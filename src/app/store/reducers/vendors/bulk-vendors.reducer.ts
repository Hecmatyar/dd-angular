import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialBulkVendorsState} from "../../state/vendors/bulk-vendors.state";
import {VendorsBulkActions} from "../../actions/vendors/bulk-vendors.actions";

export const vendorsBulkReducer = reducerWithInitialState(initialBulkVendorsState)
  .case(VendorsBulkActions.getList.started, (state) => ({...state, items: [], isLoading: true}))
  .case(VendorsBulkActions.getList.done, (state, {params, result}) => ({
      ...state,
      items: result.items,
      totalItems: result.total,
      filter: params,
      isLoading: false
    })
  )
  .case(VendorsBulkActions.getList.failed, (state) => ({...state, isLoading: false}))
  .case(VendorsBulkActions.getById.started, (state) => ({...state, vendor: {content: null, isLoading: true}}))
  .case(VendorsBulkActions.getById.done, (state, {result}) => ({
    ...state,
    vendor: {content: result, isLoading: false}
  }))
  .case(VendorsBulkActions.getById.failed, (state) => ({...state, vendor: {content: null, isLoading: false}}))
  .cases([VendorsBulkActions.ban.started,
    VendorsBulkActions.unBan.started], (state) => ({...state, isLoading: true}))
  .cases([VendorsBulkActions.ban.failed,
    VendorsBulkActions.unBan.failed], (state) => ({...state, isLoading: false}))
  .case(VendorsBulkActions.ban.done, (state, {params}) => {
    const vendors = state.items.map(item => {
      if (item.id === params) {
        item.banned = true;
      }

      return item;
    });

    return ({...state, items: vendors, isLoading: false});
  })
  .case(VendorsBulkActions.unBan.done, (state, {params}) => {
    const vendors = state.items.map(item => {
      if (item.id === params) {
        item.banned = false;
      }

      return item;
    });

    return ({...state, items: vendors, isLoading: false});
  })
  .case(VendorsBulkActions.setComment.started, (state) => ({...state, isLoading: true}))
  .case(VendorsBulkActions.setComment.done, (state, {params, result}) => {
    const items = state.items.map(item => {
      if (item.id === params.vendorId) {
        item = {...item, comment: result};
      }

      return item;
    });

    return ({...state, isLoading: false, items: items});
  })
  .case(VendorsBulkActions.setComment.failed, (state) => ({...state, isLoading: true}))
  .cases([VendorsBulkActions.update.started,
    VendorsBulkActions.add.started], (state) => ({...state, vendor: {isLoading: true, content: state.vendor.content}}))
  .cases([VendorsBulkActions.update.done,
    VendorsBulkActions.update.failed,
    VendorsBulkActions.add.done,
    VendorsBulkActions.add.failed], (state) => ({...state, vendor: {isLoading: false, content: state.vendor.content}}))
  .case( VendorsBulkActions.updateSellCommission.started, (state) => ({...state, isLoading: true}))
  .cases([VendorsBulkActions.updateSellCommission.failed,
    VendorsBulkActions.updateSellCommission.done], (state) => ({...state, isLoading: false}));
