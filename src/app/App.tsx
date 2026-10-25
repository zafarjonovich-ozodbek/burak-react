import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom"; // router'larni tashkillab olish uchun ext.package
import HomePage from "./screens/homePage";
import ProductsPage from "./screens/proudctsPage";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import OtherNavbar from "./components/headers/OtherNavbar";
import HomeNavbar from "./components/headers/HomeNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import HelpPage from "./screens/helpPage";

function App() {
  const location = useLocation(); // HOOK => use + Text

  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Switch>
        {" "}
        {/* SWITCH - page'lar orasida otish imkonini beradi*/}
        <Route path="/products">
          {/* ROUTE - ozini ichidagi component'ga jonatib beradi */}
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
