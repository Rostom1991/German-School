import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./redux/courseSlice";

const store = configureStore({
  reducer: {
    school: coursesReducer,
  },
});

export default store;
