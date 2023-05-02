import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterReducer";
import AntherSlice from "./AnthorSlice"
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    anther:AntherSlice,
  },
})
