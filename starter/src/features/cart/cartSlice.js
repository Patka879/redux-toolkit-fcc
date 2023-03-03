import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : 0,
    amount: 5,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
})

export default cartSlice.reducer