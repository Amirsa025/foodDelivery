import React from 'react';
import CartProduct from '../components/UI/cart/cartItems'
import CommonSection from "../components/UI/commonSection/CommonSection";
import Hemlet from "../components/Hemlets/Hemlet";
import {useDispatch, useSelector} from "react-redux";
import {cartAction} from "../store/shopping-cart/cartSlice";
import {Link} from "react-router-dom";

const Carts = () => {
    const cart = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state=> state.cart.totalAmount)

    return (
        <Hemlet title="سبد خرید">
            <CommonSection title={"cart"}/>

            <div className="container mx-auto px-4 py-4">
                <section>
                    <div className="px-20">
                        <div className="  ">
                            {cart.length === 0 ?
                                <h5 className={"text-center text-2xl  animate-pulse text-red-600  font-semibold bg-gray-100  py-6"}>سبد
                                    خرید شما خالی است </h5> : <table
                                    className="table-auto	w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead
                                        className={"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  border-b-4 border-t-0   border-black "}>
                                    <tr className="border">
                                        <th scope="col" className="px-6 py-3  border-r   text-center">image</th>
                                        <th scope="col" className="px-6 py-3 border-r text-center">Product Title</th>
                                        <th scope="col" className="px-6 py-3 border-r text-center">Price</th>
                                        <th scope="col" className="px-6 py-3 border-r text-center">Quantity</th>
                                        <th scope="col" className="px-6 py-3 border-r text-center">Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        cart.map((item, id) => {
                                            return (
                                                <Tr item={item} key={id}/>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>}
                        </div>
                    </div>
                </section>
                <section className={"detailsShopping py-3 px-12"} dir={"rtl"}>
                    <div className="py-2" ><h5> {"   "}مجموع خریذ: {totalAmount} هزار تومان</h5></div>
                    <div className="py-2 text-sm font-semibold ">
                        <p>مالیات و خرید خود را نهایی کنید.</p>
                    </div>
                    <div className={"flex items-center gap-4  py-3  "}>
                        <button className={"bg-red-500 px-2 py-2 rounded-lg text-xs font-semibold text-white w-40"}>
                            <Link to="/foods">ادامه خرید</Link>
                        </button>
                        <button className={"bg-red-500 px-2 py-2 rounded-lg text-xs font-semibold text-white w-40"}>
                            <Link to="/checkouts">پرداخت نهایی</Link>
                        </button>
                    </div>
                </section>
            </div>

        </Hemlet>
    );
};
const Tr = ({item}) => {
    const {image01, title, price, quantity, id} = item
    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch(cartAction.deleteItem(id))
    }
    return (
        <tr className={"border "}>
            <td className="px-6 py-3 border-r text-center">
                <img src={image01} alt="" className={"w-12 h-12 mx-auto"}/>
            </td>
            <td className="px-6 py-3 border-r text-center">{title}</td>
            <td className="px-6 py-3 border-r text-center">{price}</td>
            <td className="px-6 py-3 border-r text-center">{quantity}</td>
            <td className="px-6 py-3 border-r text-center flex item-center justify-center">
                <button onClick={deleteItem}
                        className="flex item-center gap-2  border  py-2 px-2 text-white bg-red-600  rounded-lg outline-0  transparent-all hover:bg-red-700 ">
                    <i className="ri-delete-bin-line"></i> حذف
                </button>
            </td>
        </tr>
    )
}
export default Carts;
