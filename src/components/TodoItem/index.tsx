import React, { useState } from 'react';
import { TodoItemProps } from '../../redux/slices/todoListSlice';
import styles from './TodoItem.module.css';

const TodoItem: React.FC<TodoItemProps> = ({ completed, priorityStatus, todoItemText }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className={isDone ? styles.strikethroughItem : ''} onClick={() => setIsDone(!isDone)}>
      {todoItemText}
    </div>
  );
};

export default TodoItem;
