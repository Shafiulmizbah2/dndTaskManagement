import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, { payload }) => {
      state.tasks = payload;
    },
  },
});

export const { setTask } = taskSlice.actions;

export default taskSlice.reducer;
