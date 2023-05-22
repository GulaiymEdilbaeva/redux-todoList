import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import cuid from "cuid";
import { styled } from "styled-components";
import TodoList from "../TodoList/TodoList";

const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);

    console.log(tasks);
  }
  const DeleteAll = () => {
    dispatch({ type: "DELETE_ALL" });
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({ task: tasks, id: cuid() }));
    e.target.userInput.value = "";
    setTasks("");
    console.log(tasks);
  }

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name="userInput"
          onChange={(e) => handleInputChange(e)}
        />
        <Button type="submit">Add</Button>
        <Button type="submit" onClick={DeleteAll}>
          {" "}
          DeleteAll
        </Button>
      </Form>
      <TodoList />
    </>
  );
};

export default AddTodo;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-left: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
