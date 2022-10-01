import React from "react";
import styled from "styled-components";
import TodoCard from "./TodoCard";

const TodoContainer = ({ title = "heading", items = [] }) => {
  return (
    <Container>
      <Head>
        <Title>{title}</Title>
      </Head>
      <Body>
        {!items.length && <Error>No task to found!</Error>}
        {items.map((item) => (
          <TodoCard title={item.title} key={item.id} />
        ))}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  min-width: 24rem;
  height: 80vh;
  overflow-y: auto;
  margin: 0.5rem;
  border: 1px solid ${({ theme }) => theme.black};
`;

const Head = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.red};
`;

const Title = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.128rem;
  text-transform: capitalize;
  text-align: center;
`;

const Error = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.red};
  font-size: 1.7rem;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export default TodoContainer;
