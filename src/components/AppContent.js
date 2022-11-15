import React from "react";
import { useSelector } from "react-redux";

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map(todo) => todo.title)
        : "no todo found"}
    </div>
  );
}

export default AppContent;
