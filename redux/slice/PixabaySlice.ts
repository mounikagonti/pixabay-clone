import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface I_InitialState {
  pixabayData: any[];
  pixabayLoading: boolean;
  pixabayError: string;
}

const initialState: I_InitialState = {
  pixabayData: [],
  pixabayLoading: false,
  pixabayError: "",
};

export const getPixabayApi: any = createAsyncThunk(
  "pixabay/getPixabayApi",
  async (query: string, thunkAPI) => {
    try {
      const initialQuery = "cats";
      const res = await axios.get(
        `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${
          query || initialQuery
        }&image_type=photo&pretty=true`
      );
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const PixabaySlice: any = createSlice({
  name: "pixabay",
  initialState,
  reducers: {},
  extraReducers: {
    [getPixabayApi.pending]: (state: any, action: any) => {
      state.pixabayLoading = true;
    },
    [getPixabayApi.fulfilled]: (state: any, action: any) => {
      state.pixabayLoading = false;
      state.pixabayData = action.payload;
    },
    [getPixabayApi.rejected]: (state: any, action: any) => {
      state.pixabayLoading = false;
      state.pixabayError = action.payload;
    },
  },
});

export default PixabaySlice.reducer;
