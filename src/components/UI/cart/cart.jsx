import React from "react";
import {useDispatch} from "react-redux";
import {cartAction} from "../../../store/shopping-cart/cartSlice";

const Cart = ({item}) => {
    const { title , price  , totalPrice ,image01 ,quantity , id} = item;
    const dispatch = useDispatch()
    const incrementItem = ( )=>{
        dispatch(cartAction.addItem({
            id,
            title,
            price,
            image01,
        }))
    }
    const decrementItem = () => {
        dispatch(cartAction.removeItem(id))
    }
    const deleteItem = () => {
        dispatch(cartAction.deleteItem(id))
    }
    return (<div className="cart__item px-3">
            <div className="flex gap-2 flex-col">
                {/* logo and title Almos   */} 
                    <div className = "py-2 flex  gap-4">
                        <img src={image01} alt="" className={"w-[2.188rem] h-[2.188rem] object-cover"}/>
                        <h6 className = "text-lg font-semibold">{title} </h6>
                    </div>
                {/* down  */}
                <div className=" cart_product_info flex py-1 items-center gap-5 justify-between w-full">
                    <div className={"flex items-center gap-5  px-5 flex-col" }>
                            <div>
                                <span className = "text-gray-400">{quantity}</span> <span className = "px-8 text-red-600 font-semibold">${totalPrice}</span>
                            </div>
                        <div className = "flex  justify-between items-center gap-5 bg-red-300 px-4 py-2 text-sm font-semibold">
                            <span className = "cursor-pointer" onClick={incrementItem}>+</span>
                            {quantity}
                            <span className = "cursor-pointer" onClick={decrementItem}>-</span>
                        </div>
                    </div>

                    <span className="delete__btn " onClick = {deleteItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className={"font-semibold text-[1.1rem]"}>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
                </svg>
          </span>
                </div>

            </div>
        </div>);
};

export default Cart;
