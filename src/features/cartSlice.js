import { createSlice } from "@reduxjs/toolkit";

const storedCartItems = () => {
    const storedCart = localStorage.getItem("quirio_cart");
    return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
    cartItems: storedCartItems(),
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;

            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id,
            );
        },
    },
});
