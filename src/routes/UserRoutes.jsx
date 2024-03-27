import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectRoutes from "./Protected/ProtectedRoutes";
import PublicRoutes from "./Protected/PublicRoutes";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Layout from "../pages/Layout";
import Orders from "../pages/Orders";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import SingleProductPage from "../pages/SingleProductPage";
import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
function UserRoutes() {
  return (
    <Routes>
      <Route exact path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />
      <Route exact path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
      <Route path="/" element={<Layout/>}>
        <Route index element={<ProtectRoutes><Home/></ProtectRoutes>}/>
        <Route exact path="/product/:id" element={<ProtectRoutes><SingleProductPage/></ProtectRoutes>}/>
        <Route exact path="/profile" element={<ProtectRoutes><Profile/></ProtectRoutes>}/>
        <Route exact path="/orders" element={<ProtectRoutes><Orders/></ProtectRoutes>}/>
        <Route exact path="/cart" element={<ProtectRoutes><Cart/></ProtectRoutes>}/>
        <Route exact path="/wishlist" element={<ProtectRoutes><Wishlist/></ProtectRoutes>}/>
        <Route exact path="/checkout" element={<ProtectRoutes><Checkout/></ProtectRoutes>}/>
        <Route exact path="/success" element={<ProtectRoutes><Success/></ProtectRoutes>}/>
      </Route>
    </Routes>
  );
}

export default UserRoutes;
