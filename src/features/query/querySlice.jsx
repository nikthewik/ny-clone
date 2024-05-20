import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  sort: "relevance",
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.value = action.payload;
    },
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { updateQuery, updateSort } = querySlice.actions;
export default querySlice.reducer;
