import {
  createSlice,
  createAsyncThunk,
} from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.2/+esm";
import { myProducts } from "./productsFunctions.js";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

// Testing createAsyncThunk but myProducts is a resolved Promise already
export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  return myProducts;
});
globalObjects.fetchProducts = fetchProducts;

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
