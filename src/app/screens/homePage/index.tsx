import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice"; // action(slice)
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { Member } from "../../../lib/types/member";
import "../../../css/home.css";
import MemberService from "../../services/MemberService";

/** REDUX SLICE & SELECTOR*/

// "ACTION" larni 'kamanda nomini berib chaqiryapmiz
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)), // Eshmat 'Dispatch' orqali => ACTION +payload(data)
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

export default function HomePage() {
  const { setPopularDishes, setNewDishes, setTopUsers } =
    actionDispatch(useDispatch()); // endi osha ACTIONni 'kamanda nomi' bilan "functional comp.ga" "CALL" qilyapmiz
  useEffect(() => {
    // "PRODUCT DATA FETCH" (ProductService'dan instance olyapmiz)
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setPopularDishes(data); // action.+payload
      })
      .catch((err) => console.error(err));

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        // productCollection: ProductCollection.DISH,
      })
      .then((data) => setNewDishes(data)) // action.+payload
      .catch((err) => console.error(err));

    // "MEMBER DATA FETCH" (MemberService'dan instance olyapmiz)
    const member = new MemberService();
    member
      .getTopUsers()
      .then((data) => setTopUsers(data)) // action.+payload
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
