import React from 'react'
import MainRoutes from "../../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import CartProduct from "../UI/cart/cartItems";

const Layout = () => {
  const showCart = useSelector(state=>state.cartUi.cartIsVisible)
  return (
    <>
      <Header/>
      {showCart &&   <CartProduct/>}
        <div>
        <MainRoutes/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout
