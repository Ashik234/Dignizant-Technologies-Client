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
function UserRoutes() {
  return (
    <Routes>
      <Route exact path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />
      <Route exact path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
      <Route path="/" element={<Layout/>}>
        <Route index element={<ProtectRoutes><Home/></ProtectRoutes>}/>
        <Route exact path="/profile" element={<ProtectRoutes><Profile/></ProtectRoutes>}/>
        <Route exact path="/orders" element={<ProtectRoutes><Orders/></ProtectRoutes>}/>
      </Route>
    </Routes>
  );
}

export default UserRoutes;
