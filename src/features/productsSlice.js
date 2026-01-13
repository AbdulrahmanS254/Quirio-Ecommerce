import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const limit = 12;

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async (page, thunkAPI) => {

        const skip = (page - 1) * limit;
        try {
            const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const initialState = {
    items: [],
    status: "idle",
    error: null,
    total: 0,
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
            state.items = action.payload.products;
            state.total = action.payload.total;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            // error reason catched with(rejectWithValue(err.response.data))
            state.error = action.payload;
        });
    },
});

export default productsSlice.reducer;
