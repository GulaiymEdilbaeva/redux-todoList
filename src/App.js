import { styled } from "styled-components";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useSelector } from "react-redux";
import LoginPage from "./loginPage/LoginPage";
import { Navigate, Route, Routes } from "react-router";
import TodoItem from "./components/TodoItem/TodoItem";
function App() {
  // const taskobj = useSelector((state) => state.todos.data);

  return (
    <div className="App">
      <H1>TodoList</H1>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todos" element={<AddTodo />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  color: #007fff;
`;
