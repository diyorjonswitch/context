import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";

const initialState = {
    cartItems: cartItems,
    amount: 5,
    total: 0,
    isloading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeCart: (state, action) => {
            const itemID = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemID)
        }
    }   
})
export const {clearCart, removeCart} = cartSlice.actions;

export default cartSlice.reducer;
