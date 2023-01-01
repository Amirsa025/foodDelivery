import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
const Home =React.lazy(() => import (/*webPackChunkName: home */'../pages/home'))
const Contact =React.lazy(() => import (/*webPackChunkName: Contact */'../pages/contact'))
const AllFoods = React.lazy(() => import(/*webPackChunkName: Allfoods */'../pages/Allfoods'))
const FoodDetails = React.lazy(() => import(/*webPackChunkName: foodDetails */'../pages/foodDetails'))
const Login = React.lazy(() => import(/*webPackChunkName: Login */'../pages/Login'))
const CheckOuts = React.lazy(() => import(/*webPackChunkName: CheckOuts */'../pages/checkOuts'))
const Register = React.lazy(() => import(/*webPackChunkName: Register */'../pages/Register'))
const Carts = React.lazy(() => import(/*webPackChunkName: Carts */'../pages/Carts'))
const MainRoutes = () => {
    return (
        <>
            <React.Suspense fallback={<p>loading ...</p>}>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="home" index element={<Home/>} />
                    <Route path="/foods"  element={<AllFoods/>} />
                    <Route path="/food/:id"  element={<FoodDetails/>} />
                    <Route path="/carts"  element={<Carts/>} />
                    <Route path="/checkouts"  element={<CheckOuts/>} />
                    <Route path="/login"  element={<Login/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </React.Suspense>


        </>
    );
};

export default React.memo(MainRoutes);
