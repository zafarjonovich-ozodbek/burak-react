import { createSelector } from "reselect"; // AppRootState.homePage => homePage.popularDishes/newDishes ...
import { AppRootState } from "../../../lib/types/screen";

// 'AppRootState'dagi 'homePage'ni qolga olvolyapmiz
const selectHomePage = (state: AppRootState) => state.homePage;

// "homePage SELECTOR"larni yaratyapmiz
export const retrievePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes, // 'homePage' ichidagi 'popularDishes component'ni qabul qilyapmiz
);

export const retrieveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes, /// 'homePage' ichidagi 'newDishes component'ni qabul qilyapmiz
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers, /// 'homePage' ichidagi 'topUsers component'ni qabul qilyapmiz
);
