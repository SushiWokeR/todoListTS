import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectTodo, setItemDone, TodoItemProps } from '../../redux/slices/todoListSlice';
import styles from './TodoItem.module.css';

const TodoItem: React.FC<TodoItemProps> = ({ id, completed, priorityStatus, todoItemText }) => {
  const allItems = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();

  const changeDoneStatus = (id: number) => {
    dispatch(setItemDone(id));
  };
  return (
    <div
      className={allItems.allTodoItems[id]?.completed ? styles.strikethroughItem : ''}
      onClick={() => changeDoneStatus(id)}>
      {todoItemText}
    </div>
  );
};

export default TodoItem;
