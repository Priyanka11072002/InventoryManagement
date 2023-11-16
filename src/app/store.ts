import { configureStore } from "@reduxjs/toolkit";
import {  emptySplitApi, productSlicea } from "../features/api/apiSlice";
import { productSlice } from "../features/products/productSlice";


export const store = configureStore({
    reducer:{
    [emptySplitApi.reducerPath]:emptySplitApi.reducer,

    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(emptySplitApi.middleware)
})

