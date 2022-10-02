import { createSlice } from "@reduxjs/toolkit";
import Request from "../AxiosInstance";
const initialState = {
  listed: [],
  progress: [],
  done: [],
  error: "",
};

export const statusType = {
  listed: 0,
  progress: 1,
  done: 2,
};

export const createTask = (name) => async (dispatch) => {
  try {
    await Request.post("/tasks", { name });
    dispatch(getAllTask());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const updateTask = (id, status) => async (dispatch) => {
  try {
    await Request.patch(`/tasks/${id}`, { status });
    dispatch(getAllTask());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const getAllTask = () => async (dispatch) => {
  try {
    const response = await Request.get("/tasks");
    const tasks = response.data.data;
    dispatch(setTask(tasks));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, { payload }) => {
      state.listed = payload.listed;
      state.progress = payload.progress;
      state.done = payload.done;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setTask, setError } = taskSlice.actions;

export default taskSlice.reducer;
