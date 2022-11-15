import React from "react";
import { useSelector } from "react-redux";

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return <div>AppContent</div>;
}

export default AppContent;
