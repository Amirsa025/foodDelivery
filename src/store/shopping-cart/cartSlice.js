import {createSlice} from "@reduxjs/toolkit";
// 1- INITAL STATE
const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addItem(state,action){
            // ساختن ایتم جدید  ط
            const newItem = action.payload
            const existingItem = state.cartItems.find(( item)=>item.id ===newItem.id)
            state.totalQuantity++
            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            }else {
                existingItem.quantity++
                existingItem.totalPrice += Number(existingItem.totalPrice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
        },
        removeItem (state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(( item)=>item.id===id)
            if(existingItem.quantity===1){
                state.cartItems = state.cartItems.filter(item=>item.id!==id)
            }else {

                existingItem.quantity--
                existingItem.totalPrice -= Number(existingItem.totalPrice) - Number(existingItem.price)
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
        },
        deleteItem(state,action){
            const id =action.payload
            const existingItem = state.cartItems.find(items=>items.id===id)
            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
        }
    }
})
export const cartAction= cartSlice.actions
export default  cartSlice ;
