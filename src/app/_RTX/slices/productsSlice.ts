import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts } from "../types/TProducts";
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",

  async (productsID: number) => {
    const options = {
      method: "GET",
      url: "https://free-aliexpress-api.p.rapidapi.com/hot_products",
      params: {
        cat_id: productsID,
        sort: "LAST_VOLUME_DESC",
        target_currency: "USD",
        target_language: "EN",
        page: "1",
      },
      headers: {
        "x-rapidapi-key": "194bc6b69dmshea152ded1f782cap167ce7jsn19a51789b881",
        "x-rapidapi-host": "free-aliexpress-api.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
interface initialState {
  products: TProducts[];
  loading: boolean;
  error: string | null;
}
const initialState: initialState = {
  products: [],
  loading: true,
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
