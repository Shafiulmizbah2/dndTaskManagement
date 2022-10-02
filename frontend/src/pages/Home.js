import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CreateTask from "../components/CreateTask";
import TodoContainer from "../components/TodoContainer";
import {
  createTask,
  getAllTask,
  statusType,
  updateTask,
} from "../store/taskSlice";

const Home = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector(({ task }) => task);
  const dispatch = useDispatch();

  const handleTaskChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTask(value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    dispatch(createTask(task));
    setTask("");
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, status) => {
    const id = e.dataTransfer.getData("todoID");

    if (status === "listed") {
      dispatch(updateTask(id, statusType.listed));
    }

    if (status === "progress") {
      dispatch(updateTask(id, statusType.progress));
    }

    if (status === "done") {
      dispatch(updateTask(id, statusType.done));
    }
  };

  useEffect(() => {
    dispatch(getAllTask());
  }, []);

  return (
    <Container>
      {/* Create task form Component*/}
      <CreateTask
        value={task}
        name="task"
        btnText="Add"
        handleChange={handleTaskChange}
        handleSubmit={handleTaskSubmit}
        placeholder="Write your task...."
      />

      {/* Todo container that contain Todos */}
      <TodosWrapper>
        <TodoContainer
          onDragOver={dragOver}
          onDrop={(e) => onDrop(e, "listed")}
          title="To Do"
          items={tasks.listed}
        />
        <TodoContainer
          onDragOver={dragOver}
          onDrop={(e) => onDrop(e, "progress")}
          title="In progress"
          items={tasks.progress}
        />
        <TodoContainer
          onDragOver={dragOver}
          onDrop={(e) => onDrop(e, "done")}
          title="Done"
          items={tasks.done}
        />
      </TodosWrapper>
    </Container>
  );
};

//styles
const Container = styled.div`
  max-width: 124rem;
  margin: 0 auto;
`;

const TodosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Home;
