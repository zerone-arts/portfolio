// store/slices/uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    toggle: "",
    screenWidth: window.innerWidth,
    location: "main",
    bgColor: "",
    hover: "",
    link: false,
  },
  reducers: {
    setToggle: (state, action) => {
      state.toggle = action.payload;
    },
    setScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
    setHover: (state, action) => {
      state.hover = action.payload;
    },
    setLink: (state, action) => {
      state.link = action.payload;
    },
  },
});

export const {
  setToggle,
  setScreenWidth,
  setLocation,
  setBgColor,
  setHover,
  setLink,
} = uiSlice.actions;
export default uiSlice.reducer;
