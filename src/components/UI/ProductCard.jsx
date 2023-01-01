import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartAction} from "../../store/shopping-cart/cartSlice";
const ProductCard = ({item}) => {
    const {title , image01, price , id} = item
    const dispatch = useDispatch()
    const addToCart = ()=>{
        dispatch(cartAction.addItem({
            id,title,image01,price
        }))
    }
    return (
        <div className={"product_Item px-4 py-6 border  mt-12 "}>
                {/*top card */}
            <div className={"product__image flex flex-col items-center justify-center hover:scale-75 cursor-pointer transition-all duration-300"}>
                <img src={image01} alt="product" className={"w-24 mt-5  "}/>
            </div>
        {/*    middle content card */}
            <div className={"product_content flex flex-col items-center justify-center py-2"}>
                <Link to={`/food/${id}`}>{title}</Link>
            </div>
        {/*    down card*/}
            <div className={"text-right pt-8 pb-0 flex items-center justify-between text-right"}>
                <span className={"product__price text-sm  font-semibold"}>  هزار تومان{" - "}{price}</span>
                <button className={"addToCart bg-red-600 sm:ml-4 text-white py-2 px-2 rounded-full cursor-pointer text-sm sm:text-sm "} onClick={addToCart}>افزودن به سبد خرید</button>
            </div>
        </div>
    );
};

export default ProductCard;
