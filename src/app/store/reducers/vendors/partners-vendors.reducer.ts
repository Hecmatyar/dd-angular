import {reducerWithInitialState} from "typescript-fsa-reducers";
import {VendorsPartnersActions} from "../../actions/vendors/partners-vendors.actions";
import {initialPartnersVendorsState} from "../../state/vendors/partners-vendors.state";

export const vendorsPartnersReducer = reducerWithInitialState(initialPartnersVendorsState)
  .case(VendorsPartnersActions.getList.started, (state) => ({...state, items: [], isLoading: true}))
  .case(VendorsPartnersActions.getList.done, (state, {params, result}) => ({
      ...state,
      items: result.items,
      totalItems: result.total,
      filter: params,
      isLoading: false
    })
  )
  .case(VendorsPartnersActions.getList.failed, (state) => ({...state, isLoading: false}))
  .case(VendorsPartnersActions.getById.started, (state) => ({...state, vendor: {content: null, isLoading: true}}))
  .case(VendorsPartnersActions.getById.done, (state, {result}) => ({
    ...state,
    vendor: {content: result, isLoading: false}
  }))
  .case(VendorsPartnersActions.getById.failed, (state) => ({...state, vendor: {content: null, isLoading: false}}))
  .cases([VendorsPartnersActions.ban.started,
    VendorsPartnersActions.unBan.started], (state) => ({...state, isLoading: true}))
  .cases([VendorsPartnersActions.ban.failed,
    VendorsPartnersActions.unBan.failed], (state) => ({...state, isLoading: false}))
  .case(VendorsPartnersActions.ban.done, (state, {params}) => {
    const vendors = state.items.map(item => {
      if (item.id === params) {
        item.banned = true;
      }

      return item;
    });

    return ({...state, items: vendors, isLoading: false});
  })
  .case(VendorsPartnersActions.unBan.done, (state, {params}) => {
    const vendors = state.items.map(item => {
      if (item.id === params) {
        item.banned = false;
      }

      return item;
    });

    return ({...state, items: vendors, isLoading: false});
  })
  .case(VendorsPartnersActions.setComment.started, (state) => ({...state, isLoading: true}))
  .case(VendorsPartnersActions.setComment.done, (state, {params, result}) => {
    const items = state.items.map(item => {
      if (item.id === params.vendorId) {
        item = {...item, comment: result};
      }

      return item;
    });

    return ({...state, isLoading: false, items: items});
  })
  .case(VendorsPartnersActions.setComment.failed, (state) => ({...state, isLoading: true}))
  .cases([VendorsPartnersActions.update.started,
    VendorsPartnersActions.add.started], (state) => ({
    ...state,
    vendor: {content: state.vendor.content, isLoading: true}
  }))
  .cases([VendorsPartnersActions.add.done,
    VendorsPartnersActions.update.done,
    VendorsPartnersActions.add.failed,
    VendorsPartnersActions.update.failed], (state) => ({
    ...state,
    vendor: {content: state.vendor.content, isLoading: false}
  }));
