import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retrieveRestaurant = createSelector(
  selectProductsPage,
  (Products) => Products.restaurant,
);

export const retrieveChosenProduct = createSelector(
  selectProductsPage,
  (Products) => Products.chosenProduct,
);

export const retrieveProducts = createSelector(
  selectProductsPage,
  (Products) => Products.products,
);
