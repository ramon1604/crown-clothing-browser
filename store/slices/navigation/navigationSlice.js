import { createSlice } from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.2/+esm";

const initialState = {
  navigation: null,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    updNavigation: (state, action) => {
      state.navigation = action.payload;
    },
  },
});

const { updNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;