import React from "react";
import {Link} from "react-router-dom";
import CartItems from "./cart";
import {useDispatch, useSelector} from "react-redux";
import {cartUiActions} from "../../../store/shopping-cart/cartSIdeUi";

const CartProduct = () => {
    const dispatch = useDispatch()
    const cartProduct = useSelector(state=>state.cart.cartItems)
    //function
    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }
    const totalAmount = useSelector(state=>state.cart.totalAmount)
    return (
        <div className={"fixed top-0 left-0 z-[999999] bg-black/75 w-full h-full "}>
            <div
                className="cart px-2 py-3 flex justify-end border border-gray-500 absolute top-0 right-0   bg-white  z-[9999999 ] w-[25rem] h-full ">
                {/* close icon  */}
                <div className={"flex flex-col justify-start w-full overflow-y-scroll px-1 mb-20"}>
                    <div className="cart_close px-4 py-6 w-full "
                         onClick={toggleCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
                             className="p-1 rounded-full cursor-pointer  bg-black ">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                fill="rgba(255,255,255,1)"/>
                        </svg>
                    </div>
                    <div className="cart_List py-2 ">
                        {
                            cartProduct.length === 0 ? <h6 className={"text-center font-semibold mt-6"}>سبد خرید شما خالی است </h6>
                                :cartProduct.map((item, id) => {
                                    return (
                                        <CartItems item={item} key = {id}/>
                                    )
                                })
                        }

                    </div>
                    <div className="cart_bottom flex items-center text px-2  w-full ">
                        <button className=" bg-red-600 bg-white text-[0.9rem] rounded-lg py-1 px-1 ">
                            <Link to="/checkouts">پرداخت صورت حساب</Link>
                        </button>
                        <span
                            className="px-4 font-semibold text-sm text-white ">مجموع صورت حساب : <span>{totalAmount}هزار تومان </span></span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
