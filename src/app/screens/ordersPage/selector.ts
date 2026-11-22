import { createSelector } from "reselect"; // AppRootState.homePage => homePage.popularDishes/newDishes ...
import { AppRootState } from "../../../lib/types/screen";

// 'AppRootState'dagi 'ordersPage'ni qolga olvolyapmiz
const selecOrdersPage = (state: AppRootState) => state.ordersPage;

// "ordersPage SELECTOR"larni yaratyapmiz
export const retrievePausedOrders = createSelector(
  selecOrdersPage,
  (OrdersPage) => OrdersPage.pausedOrders,
);

export const retrieveProcessOrders = createSelector(
  selecOrdersPage,
  (OrdersPage) => OrdersPage.processOrders,
);

export const retrieveFinishedOrders = createSelector(
  selecOrdersPage,
  (OrdersPage) => OrdersPage.finishedOrders,
);
