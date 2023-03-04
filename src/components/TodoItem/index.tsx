import React from 'react';
import { TodoItemProps } from '../../redux/slices/todoListSlice';

const TodoItem: React.FC<TodoItemProps> = ({ completed, priorityStatus, todoItemText }) => {
  return <div>{todoItemText}</div>;
};

export default TodoItem;
