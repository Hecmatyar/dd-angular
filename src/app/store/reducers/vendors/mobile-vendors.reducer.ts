import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialMobileVendorsState} from "../../state/vendors/mobile-vendors.state";
import {VendorsMobileActions} from "../../actions/vendors/mobile-vendors.actions";

export const vendorsMobileReducer = reducerWithInitialState(initialMobileVendorsState)
  .case(VendorsMobileActions.getList.started, (state) => ({...state, items: [], isLoading: true}))
  .case(VendorsMobileActions.getList.done, (state, {params, result}) => ({
      ...state,
      items: result.items,
      totalItems: result.total,
      filter: params,
      isLoading: false
    })
  )
  .case(VendorsMobileActions.getList.failed, (state) => ({...state, isLoading: false}))
  .case(VendorsMobileActions.getById.started, (state) => ({...state, vendor: {content: null, isLoading: true}}))
  .case(VendorsMobileActions.getById.done, (state, {result}) => ({
    ...state,
    vendor: {content: result, isLoading: false}
  }))
  .case(VendorsMobileActions.getById.failed, (state) => ({...state, vendor: {content: null, isLoading: false}}))
  .cases([VendorsMobileActions.ban.started,
    VendorsMobileActions.unBan.started], (state) => ({...state, isLoading: true}))
  .cases([VendorsMobileActions.ban.failed,
    VendorsMobileActions.unBan.failed], (state) => ({...state, isLoading: false}))
  .case(VendorsMobileActions.ban.done, (state, {params}) => {
    const vendors = state.items.map(item => {
      if (item.id === params) {
        item.banned = true;
      }

      return item;
    });

    return ({...state, items: vendors, isLoading: false});
  })
  .case(VendorsMobileActions.unBan.done, (state, {params}) => {
    const vendors = state.items.map(item => {
      if (item.id === params) {
        item.banned = false;
      }

      return item;
    });

    return ({...state, items: vendors, isLoading: false});
  })
  .case(VendorsMobileActions.setComment.started, (state) => ({...state, isLoading: true}))
  .case(VendorsMobileActions.setComment.done, (state, {params, result}) => {
    const items = state.items.map(item => {
      if (item.id === params.vendorId) {
        item = {...item, comment: result};
      }

      return item;
    });

    return ({...state, isLoading: false, items: items});
  })
  .case(VendorsMobileActions.setComment.failed, (state) => ({...state, isLoading: true}))
  .case(VendorsMobileActions.update.started, (state) => ({...state, isLoading: true}))
  .cases([VendorsMobileActions.update.done,
    VendorsMobileActions.update.failed], (state) => ({...state, isLoading: false}))
  .case(VendorsMobileActions.deletePaymentMethod.started, (state, payload) => {
    let methods = state.vendor.content ? (state.vendor.content.paymentMethods || []) : [];
    methods = methods.filter(item => item.id !== payload);

    return {...state, vendor: {content: {...state.vendor.content, paymentMethods: methods}, isLoading: false}};
  });
