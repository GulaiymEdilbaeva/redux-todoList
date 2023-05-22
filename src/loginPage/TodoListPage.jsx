import React, { useState } from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoList from "../components/TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../actions";
// import { deleteTodo, updateTodo } from "../actions";

function TodoListPage() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);

  const handleAddTodo = (task) => {
    dispatch(addTodo({ task, id: Date.now() }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}>
        {(todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={handleDeleteTodo} />
        )}
      </TodoList>
    </div>
  );
}

export default TodoListPage;
