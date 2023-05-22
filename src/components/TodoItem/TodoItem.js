import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../actions";
import { styled } from "styled-components";
// import { COMPLETE_TODO } from "../../actions/types";
import { completeTodo } from "../../actions";
const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const textRef = useRef(null);
  function editItemToState(e) {
    e.preventDefault();
    dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
    setIsUpdate(false);
    textRef.current = null;
  }

  //
  function handleCompleteTodo() {
    dispatch(completeTodo(task.id));
  }

  //

  const renderForm = () => {
    return (
      <Form onSubmit={editItemToState}>
        <Input ref={textRef} type="text" defaultValue={task.task} />
        <Button type="submt">Edit Todo</Button>
      </Form>
    );
  };
  const renderItem = () => {
    return (
      <ItemContainer>
        <TaskText completed={task.completed}> {task.task} </TaskText>
        <input type="checkbox" onChange={handleCompleteTodo} />

        <EditButton onClick={() => setIsUpdate(true)}>Edit</EditButton>
        <DeleteButton onClick={() => dispatch(deleteTodo(task.id))}>
          Delete
        </DeleteButton>
      </ItemContainer>
    );
  };

  return (
    <>
      <p></p>
      <div>{isUpdate ? renderForm() : renderItem()}</div>
    </>
  );
};

export default TodoItem;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
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

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const TaskText = styled.p`
//   margin-right: 10px;
// `;

const EditButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 14px;
  background-color: #ffc107;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff9800;
  }
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;
const TaskText = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};
`;
