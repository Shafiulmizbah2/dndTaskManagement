import React, { useState } from "react";
import styled from "styled-components";
import CreateTask from "../components/CreateTask";
import TodoContainer from "../components/TodoContainer";

const itemArr = [
  { id: 1, title: "task 1" },
  { id: 2, title: "task 2" },
  { id: 3, title: "task 3" },
  { id: 4, title: "task 4" },
  { id: 5, title: "task 5" },
  { id: 6, title: "task 6" },
];

const Home = () => {
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTask(value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
  };

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
        <TodoContainer title="To Do" items={itemArr} />
        <TodoContainer title="In progress" items={itemArr} />
        <TodoContainer title="Done" items={itemArr} />
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
