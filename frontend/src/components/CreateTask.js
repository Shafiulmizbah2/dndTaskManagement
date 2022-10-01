import React from "react";
import styled from "styled-components";

//This component takes all the default property for an input element as well as handleChange, handleSubmit, btnText;
const CreateTask = ({
  handleChange,
  handleSubmit,
  btnText = "submit",
  ...rest
}) => {
  return (
    <Container>
      <Input type="text" onChange={handleChange} {...rest} />
      <Submit onClick={handleSubmit}>{btnText}</Submit>
    </Container>
  );
};

//styles
const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

const Input = styled.input`
  padding: 1rem 2rem;
  width: 40%;
  min-width: 20rem;
  border: 2px solid ${({ theme }) => theme.black};
  font-family: inherit;
  font-size: inherit;
  color: inherit;
`;

const Submit = styled.button`
  outline: none;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.red};
  padding: 1rem 2rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  text-transform: capitalize;
  margin-left: 2%;
  cursor: pointer;
`;

export default CreateTask;
