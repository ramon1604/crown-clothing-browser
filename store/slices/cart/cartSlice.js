import { createSlice } from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.2/+esm";

const initialState = {
  cart: globalObjects.getStorage("cart", { cartItems: [], itemsCount: 0, total: 0 }),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updCart: (state, action) => {
      state.cart = action.payload;
      globalObjects.addStorage("cart", action.payload);
    },
  },
});

const { updCart } = cartSlice.actions;

export default cartSlice.reducer;
