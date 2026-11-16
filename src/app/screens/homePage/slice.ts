import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

// HomePage'ning "slice"ni yaratyapmiz, 'HomePageState' asosida, va ular 3ta 'component'dan tashkil topgan
// NEGA yaratdik? Sabab: Backend'dan data kelguncha "CRASH" bolmasligi uchun(loading) bolib turishi uchun
const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

// "Slice" xosil qilyapmiz
const homePageSlice = createSlice({
  name: "homePage", // "Slice"ning nomi
  initialState,
  reducers: {
    // "Reducers"ni quryapmiz
    // setPopularDishes - reducers' bolib undagi "state" - tepadagi 'initialState(5-qatorda)',
    // "action" payload orqali backendan kelayotkan 'data'ni reducers'ga joylap beradi
    setPopularDishes: (state, action) => {
      // action.payload orqali kelgan data'ni 'state'ning popularDishes'ga joylab beradi
      state.popularDishes = action.payload;
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});

// "ACTION" (Redux Toolkit 'createSlice' orqali har bir "Reducer" uchun mos 'action creator' va 'action type'ni avtomatik yaratadi.)
export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSlice.actions;

// bu "Reducer" => "Store"ga ulanadi
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
