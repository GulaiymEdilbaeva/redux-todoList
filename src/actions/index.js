import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  DELETE_ALL,
  COMPLETE_TODO,
} from "./types";

export const addTodo = (message) => ({
  type: ADD_TODO,
  message,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const updateTodo = ({ message, id }) => ({
  type: UPDATE_TODO,
  message,
  id,
});
export const deleteAll = () => ({
  type: DELETE_ALL,
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id,
});
