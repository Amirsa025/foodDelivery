import {createSlice} from "@reduxjs/toolkit"


    const cartUi = createSlice({
        name : "CartUi",
        initialState : {
            cartIsVisible : false
        },
        reducers : {
            toggle(state){
                state.cartIsVisible = !state.cartIsVisible
            }
        }
    })
export const cartUiActions = cartUi.actions
export default cartUi;
