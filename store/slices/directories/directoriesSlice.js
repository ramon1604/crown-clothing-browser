import {
  createSlice,
  createAsyncThunk,
} from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.2/+esm";
import { myDirectories } from "./directoriesFunctions.js";

const initialState = {
  loading: false,
  directories: [],
  error: "",
};

// Testing createAsyncThunk but myDirectories is a resolved Promise already
export const fetchDirectories = createAsyncThunk("directories/fetchDirectories", () => {
  return myDirectories;
});
globalObjects.fetchDirectories = fetchDirectories;

const directoriesSlice = createSlice({
  name: "directories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDirectories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDirectories.fulfilled, (state, action) => {
      state.loading = false;
      state.directories = action.payload;
      state.error = "";
    });
    builder.addCase(fetchDirectories.rejected, (state, action) => {
      state.loading = false;
      state.directories = [];
      state.error = action.error.message;
    });
  },
});

export default directoriesSlice.reducer;
