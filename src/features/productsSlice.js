import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const limit = 12;

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async (page, thunkAPI) => {
        const skip = (page - 1) * limit;
        try {
            const response = await axios.get(
                `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const fetchProductById = createAsyncThunk(
    "product/fetchById",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(
                `https://dummyjson.com/products/${id}`
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const initialState = {
    items: [],
    status: "idle",
    singleItem: null,
    itemStatus: "idle",
    itemError: null,
    error: null,
    total: 0,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        clearSingleProduct: (state) => {
            state.singleItem = null;
            state.itemStatus = "idle";
            state.itemError = null;
        },
    },
    extraReducers: (builder) => {
        // < ==== Fetching all items reducers ==== >
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload.products;
            state.total = action.payload.total;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            // error reason catched with(rejectWithValue(err.response.data))
            state.error = action.payload;
        });

        // < ==== Fetching a single product ==== >
        builder.addCase(fetchProductById.pending, (state) => {
            state.itemStatus = "pending";
        });
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.itemStatus = "succeeded";
            state.singleItem = action.payload;
        });
        builder.addCase(fetchProductById.rejected, (state, action) => {
            state.itemStatus = "failed";
            // error reason catched with(rejectWithValue(err.response.data))
            state.itemError = action.payload;
        });
    },
});

export const { clearSingleProduct } = productsSlice.actions;

export default productsSlice.reducer;
