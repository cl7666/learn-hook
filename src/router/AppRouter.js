import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Find from "../pages/Find";
import Order from "../pages/Order";
import User from "../pages/User";

import Details from "../pages/Order/subpage/Details";

import BottomNav from "../components/BottomNav";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <BottomNav />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/Cart" element={<Cart />}></Route>
                <Route path="/Find" element={<Find />}></Route>
                <Route path="/Order" element={<Order />}></Route>
                <Route path="/User" element={<User />}></Route>
                <Route path="/Details/:id" element={<Details />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter