import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum TodoItemStatusEnum {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  DEFAULT = 'Choose One...',
}

export type TodoItemProps = {
  todoItemText: string;
  completed: boolean;
  priorityStatus: TodoItemStatusEnum;
};

export interface TodoListState {
  allTodoItems: TodoItemProps[];
}

const initialState: TodoListState = {
  allTodoItems: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      // TODO: не смог типизировать экшн
      console.log(action.payload);

      state.allTodoItems.push({
        todoItemText: action.payload.todoItemText,
        completed: false,
        priorityStatus: TodoItemStatusEnum.DEFAULT,
      });
    },
    // addTodoItem: (state, action: PayloadAction<string>) => {
    //   state.allTodoItems = state.todoItemText.push();
    // },
  },
});

export const { addTodoItem } = todoListSlice.actions;

export const selectTodo = (state: RootState) => state.todoList;

export default todoListSlice.reducer;
