import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  selectCourse: JSON.parse(localStorage.getItem("course")) || null,
};

export const courseSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    getCourses: (state, action) => {
      state.courses = action.payload;
    },
    getCourse: (state, action) => {
      const { id } = action.payload;
      const selectedCourse = state.courses.find((course) => course.id === id);
      if (selectedCourse) {
        state.selectCourse = selectedCourse;
        localStorage.setItem("course", JSON.stringify(state.selectCourse));
      }
    },
  },
});

export default courseSlice.reducer;
export const { getCourses, getCourse } = courseSlice.actions;
