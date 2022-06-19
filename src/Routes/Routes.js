import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import AllFoods from "../pages/Allfoods";
import FoodDetails from "../pages/foodDetails";
import Carts from "../pages/Carts";
import CheckOuts from "../pages/checkOuts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/contact";
const MainRoutes = () => {
    return (
        <>
           <Routes>
               <Route path="/" element={<Navigate to="/home" />} />
               <Route path="home" index element={<Home/>} />
               <Route path="/foods"  element={<AllFoods/>} />
               <Route path="/foods/:id"  element={<FoodDetails/>} />
               <Route path="/carts"  element={<Carts/>} />
               <Route path="/checkouts"  element={<CheckOuts/>} />
               <Route path="/login"  element={<Login/>} />
               <Route path="/register" element={<Register />} />
               <Route path="/contact" element={<Contact />} />
           </Routes>
        </>
    );
};

export default MainRoutes;
