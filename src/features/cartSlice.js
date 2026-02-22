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

            if (existingItem) {
                existingItem.quantity += newItem.quantity || 1;
            } else {
                state.cartItems.push({ ...newItem, quantity: 1 });
            }

            localStorage.setItem(
                "quirio_cart",
                JSON.stringify(state.cartItems),
            );
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;

            state.cartItems = state.cartItems.filter(
                (item) => item.id === itemId,
            );

            localStorage.setItem(
                "quirio_cart",
                JSON.stringify(state.cartItems),
            );
        },
        increaseQuantity: (state, action) => {
            const itemId = action.payload;

            const existingItem = state.cartItems.find(
                (item) => item.id === itemId,
            );

            if (existingItem) {
                existingItem.quantity += 1;

                localStorage.setItem(
                    "quirio_cart",
                    JSON.stringify(state.cartItems),
                );
            }
        },
        decreaseQuantity: (state, action) => {
            const itemId = action.payload;

            const existingItem = state.cartItems.find(
                (item) => item.id === itemId,
            );

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;

                localStorage.setItem(
                    "quirio_cart",
                    JSON.stringify(state.cartItems),
                );
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;

            // clear the local storage
            localStorage.removeItem("quirio_cart");
        },
    },
});
