import React, { useState } from "react";
import styled from "styled-components";
import CreateTask from "../components/CreateTask";

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
      <CreateTask
        value={task}
        name="task"
        btnText="Add"
        handleChange={handleTaskChange}
        handleSubmit={handleTaskSubmit}
        placeholder="Write your task...."
      />
    </Container>
  );
};

//styles
const Container = styled.div`
  max-width: 124rem;
  margin: 0 auto;
`;

export default Home;
