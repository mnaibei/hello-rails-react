import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "api/random_greeting";

const initialState = {
  greetings: [],
  isLoading: false,
  error: null,
};

export const fetchGreetings = createAsyncThunk(
  "greetings/fetchGreetings",
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }
);

const greetingSlice = createSlice({
  name: "greetings",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greetings = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default greetingSlice.reducer;
