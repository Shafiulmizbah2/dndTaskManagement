import React from "react";
import styled from "styled-components";

const TodoCard = ({ title, onDragStart }) => {
  return (
    <Container draggable onDragStart={onDragStart}>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  width: 80%;
  min-width: 20rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.gray};
  border: 1px solid ${({ theme }) => theme.black};
`;

const Title = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
`;

export default TodoCard;
