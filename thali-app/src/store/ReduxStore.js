import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cartslice";

const Store=configureStore({
    reducer:{
        cartdata:CartReducer.reducer
    }
})
export default Store;