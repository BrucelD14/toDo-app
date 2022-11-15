import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
    const localTodoList = window.localStorage.getItem('todoList');
    if(localTodoList) {
        return JSON.parse(localTodoList)
    }
}

const initialValue = {
    todoList: getInitialTodo(),
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    
})