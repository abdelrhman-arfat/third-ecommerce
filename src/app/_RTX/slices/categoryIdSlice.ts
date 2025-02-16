import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 18;

const categoryIdSlice = createSlice({
  name: "cat_id",
  initialState,
  reducers: {
    changeCatId: (state, action) => {
      return action.payload;
    },
  },
});
export const { changeCatId } = categoryIdSlice.actions;
export default categoryIdSlice.reducer;
