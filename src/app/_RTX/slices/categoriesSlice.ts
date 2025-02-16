import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategoires } from "../types/TCategories";

const options = {
  method: "GET",
  url: "https://free-aliexpress-api.p.rapidapi.com/categories",
  headers: {
    "x-rapidapi-key": "194bc6b69dmshea152ded1f782cap167ce7jsn19a51789b881",
    "x-rapidapi-host": "free-aliexpress-api.p.rapidapi.com",
  },
};
export const fetchCategory = createAsyncThunk(
  "categoriesSlice/fetchCategory",
  async () => {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
interface initialState {
  categories: TCategoires[];
  loading: boolean;
  error: string | null;
}
const initialState: initialState = {
  categories: [],
  loading: true,
  error: null,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categoriesSlice.reducer;
