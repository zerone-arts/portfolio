import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectCategory: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectCategory: (state, action) => {
      state.selectCategory = action.payload;
    },
  },
});

export const { setSelectCategory } = categorySlice.actions;
export default categorySlice.reducer;
