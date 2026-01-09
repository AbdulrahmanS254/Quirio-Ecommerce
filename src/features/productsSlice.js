import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Creating the thunk
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            return response.data.products;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// The slice

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {
        // takes actions that doesn't need api
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
        });
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        });
    },
});

export default productsSlice.reducer;
