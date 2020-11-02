import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialBulkOrdersState} from "../../state/order/bulk-orders.state";
import {BulkOrdersActions} from "../../actions/order/bulk-orders.actions";

export const bulkOrdersReducer = reducerWithInitialState(initialBulkOrdersState)
  .case(BulkOrdersActions.getList.started, (state) => ({...state, items: [], isLoading: true}))
  .case(BulkOrdersActions.getList.done, (state, {params, result}) => ({
      ...state,
      items: result.items,
      totalItems: result.total,
      filter: params,
      isLoading: false,
    })
  )
  .case(BulkOrdersActions.getList.failed, (state) => ({...state, isLoading: false}))
  .case(BulkOrdersActions.setStatus.started, (state) => ({...state, isLoading: true}))
  .cases([BulkOrdersActions.setStatus.failed,
    BulkOrdersActions.setStatus.done], (state) => ({...state, isLoading: false}))
  .case(BulkOrdersActions.setComment.started, (state) => ({...state, isLoading: true}))
  .case(BulkOrdersActions.setComment.done, (state, {params, result}) => {
    const items = state.items.map(item => {
      if (item.id === params.orderId) {
        item = {...item, comment: result};
      }

      return item;
    });

    return ({...state, isLoading: false, items: items});
  })
  .case(BulkOrdersActions.setComment.failed, (state) => ({...state, isLoading: false}));
