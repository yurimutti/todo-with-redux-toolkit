import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  completed?: boolean;
}

type Todos = {
  list: Todo[];
};

const initialState: Todos = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const { id, text } = action.payload;
      state.list.push({ id, text, completed: false });
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const todo = state.list.find((item) => item.id === action.payload.id);

      if (todo) {
        todo.text = action.payload.text;
      }
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.list.find((item) => item.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const todoFiltered = state.list.filter(
        (item) => item.id !== action.payload
      );

      state.list = todoFiltered;
    },
    deleteAllTodos: (state) => {
      state.list = [];
    },
  },
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo, deleteAllTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
