import { createSlice } from "@reduxjs/toolkit";
import { MutableRefObject } from "react";

interface MySliceState {
  searchRef: MutableRefObject<HTMLDivElement | null> | null;
  filterRef: MutableRefObject<HTMLDivElement | null> | null;
  searchFilteContainerRef: MutableRefObject<HTMLDivElement | null> | null;
}

const initialState: MySliceState = {
  searchRef: null,
  filterRef: null,
  searchFilteContainerRef: null,
};

const mySlice = createSlice({
  name: "mySlice",
  initialState,

  reducers: {
    setSearchRef(state, action) {
      state.searchRef = action.payload;
    },

    setFilterRef(state, action) {
      state.filterRef = action.payload;
    },

    setSearchFilterContainerRef(state, action) {
      state.searchFilteContainerRef = action.payload;
    },
  },
});

export const { setFilterRef, setSearchRef, setSearchFilterContainerRef } =
  mySlice.actions;
export default mySlice.reducer;
