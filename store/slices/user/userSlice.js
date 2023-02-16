import { createSlice } from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.2/+esm";

const initialState = {
  currentUser: globalObjects.getStorage("currentUser", null),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updUser: (state, action) => {
      state.currentUser = action.payload;
      globalObjects.addStorage("currentUser", action.payload);
    },
  },
});

const { updUser } = userSlice.actions;

export default userSlice.reducer;
