import  {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUi from "./shopping-cart/cartSIdeUi";


const store = configureStore({
        reducer : {
                cart : cartSlice.reducer,
                 cartUi :  cartUi.reducer
        }
});

export default store;
