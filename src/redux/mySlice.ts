import { createSlice } from "@reduxjs/toolkit";

interface MySliceState {
  searchWidth: number | null;
  filterWidth: number | null;
  searchFilterContainerWidth: number | null;
}

const initialState: MySliceState = {
  searchWidth: null,
  filterWidth: null,
  searchFilterContainerWidth: null,
};

const mySlice = createSlice({
  name: "mySlice",
  initialState,

  reducers: {
    setSearchWidth(state, action) {
      state.searchWidth = action.payload;
    },

    setFilterWidth(state, action) {
      state.filterWidth = action.payload;
    },

    setSearchFilterContainerWidth(state, action) {
      state.searchFilterContainerWidth = action.payload;
    },
  },
});

export const { setFilterWidth, setSearchWidth, setSearchFilterContainerWidth } =
  mySlice.actions;
export default mySlice.reducer;
