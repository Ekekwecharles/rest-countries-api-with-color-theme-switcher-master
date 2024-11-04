import { configureStore } from "@reduxjs/toolkit";
import mySliceReducer from "./redux/mySlice";

const store = configureStore({
  reducer: {
    mySlice: mySliceReducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;
export default store;
