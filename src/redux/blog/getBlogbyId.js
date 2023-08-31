// blogByIdSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getBlogsById } from "../../firebase/firebaseFunctions";

const initialState = {};

export const blogByIdSlice = createSlice({
  name: "blogById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogsById.fulfilled, (state, action) => {
      console.log(action.payload)
        return action.payload;
    });
  },
});

export default blogByIdSlice.reducer;
