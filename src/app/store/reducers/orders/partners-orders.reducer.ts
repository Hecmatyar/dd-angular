import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialPartnerOrdersState} from "../../state/order/partners-orders.state";
import {PartnerOrdersActions} from "../../actions/order/partners-orders.actions";

export const partnerOrdersReducer = reducerWithInitialState(initialPartnerOrdersState)
  .case(PartnerOrdersActions.getList.started, (state) => ({...state, items: [], isLoading: true}))
  .case(PartnerOrdersActions.getList.done, (state, {params, result}) => ({
      ...state,
      items: result.items,
      totalItems: result.total,
      filter: params,
      isLoading: false,
    })
  )
  .case(PartnerOrdersActions.getList.failed, (state) => ({...state, isLoading: false}))
  .case(PartnerOrdersActions.setStatus.started, (state) => ({...state, isLoading: true}))
  .cases([PartnerOrdersActions.setStatus.failed,
    PartnerOrdersActions.setStatus.done], (state) => ({...state, isLoading: false}))
  .case(PartnerOrdersActions.setComment.started, (state) => ({...state, isLoading: true}))
  .case(PartnerOrdersActions.setComment.done, (state, {params, result}) => {
    const items = state.items.map(item => {
      if (item.id === params.orderId) {
        item = {...item, comment: result};
      }

      return item;
    });

    return ({...state, isLoading: false, items: items});
  })
  .case(PartnerOrdersActions.setComment.failed, (state) => ({...state, isLoading: false}));
