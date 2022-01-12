import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./productViewModal/productModalSlice";
import productShippingSlice from "./productShipping/productShippingSlice";

export const store = configureStore({
    reducer:{
        productModal: productModalSlice,
        productShipping: productShippingSlice,
    }
})