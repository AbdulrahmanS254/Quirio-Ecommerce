import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`https://dummyjson.com/products?limit=${12}&skip=${12}`);
            return response.data.products;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const initialState = {
    items: [],
    status: "idle",
    error: null,
    currentPage: 0,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            // response.data.products = action.payload
            state.items = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            // error reason catched with(rejectWithValue(err.response.data))
            state.error = action.payload;
        });
    },
});

export default productsSlice.reducer;
