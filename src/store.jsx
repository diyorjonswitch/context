import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Feature/Cart/CartSlice";

export const store = configureStore({
    reducer: {
        cart: Cartslice
    }
})