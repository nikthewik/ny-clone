import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  section: "",
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    setDropdown: (state, action) => {
      state.section = action.payload;
    },
    unsetDropdown: (state) => {
      state.section = initialState.section;
    },
  },
});

export const { setDropdown, unsetDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
