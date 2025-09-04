import { createSlice, configureStore } from "@reduxjs/toolkit";

//first slice - user details
//second slice - user added products
//third slice - user added payment details

const StudentCountSlice = createSlice({
  name: "studentCount",
  initialState: {
    value: 50,
  },
  reducers: {
    addStudent: (state) => {
      state.value = state.value + 1;
    },
    decreaseStudent: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { addStudent, decreaseStudent } = StudentCountSlice.actions;

const store = configureStore({
  reducer: {
    StudentCount: StudentCountSlice.reducer,
  },
});

export default store;
