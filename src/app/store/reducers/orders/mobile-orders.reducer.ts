import {reducerWithInitialState} from "typescript-fsa-reducers";
import {MobileOrdersActions} from "../../actions/order/mobile-orders.actions";
import {initialMobileOrdersState} from "../../state/order/mobile-orders.state";

export const mobileOrdersReducer = reducerWithInitialState(initialMobileOrdersState)
  .case(MobileOrdersActions.getList.started, (state) => ({...state, items: [], isLoading: true}))
  .case(MobileOrdersActions.getList.done, (state, {params, result}) => ({
      ...state,
      items: result.items,
      totalItems: result.total,
      filter: params,
      isLoading: false,
    })
  )
  .case(MobileOrdersActions.getList.failed, (state) => ({...state, isLoading: false}))
  .case(MobileOrdersActions.setStatus.started, (state) => ({...state, isLoading: true}))
  .cases([MobileOrdersActions.setStatus.failed,
    MobileOrdersActions.setStatus.done], (state) => ({...state, isLoading: false}))
  .case(MobileOrdersActions.setComment.started, (state) => ({...state, isLoading: true}))
  .case(MobileOrdersActions.setComment.done, (state, {params, result}) => {
    const items = state.items.map(item => {
      if (item.id === params.orderId) {
        item = {...item, comment: result};
      }

      return item;
    });

    return ({...state, isLoading: false, items: items});
  })
  .case(MobileOrdersActions.setComment.failed, (state) => ({...state, isLoading: false}));
