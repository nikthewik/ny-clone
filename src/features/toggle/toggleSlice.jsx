import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHamburgerOpen: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleHamburger: (state) => {
      state.isHamburgerOpen = !state.isHamburgerOpen;
    },
  },
});

export const { toggleHamburger } = toggleSlice.actions;
export default toggleSlice.reducer;
