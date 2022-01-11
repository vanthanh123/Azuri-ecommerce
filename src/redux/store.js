import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./productViewModal/productModalSlice";

export const store = configureStore({
    reducer:{
        productModal: productModalSlice
    }
})