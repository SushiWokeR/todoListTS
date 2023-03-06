import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addTodoItem, selectTodo } from '../../redux/slices/todoListSlice';

const TodoHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const [localInputState, setLocalInputState] = useState<string>('');
  const { allTodoItems } = useAppSelector(selectTodo);
  const onChangeInputHandler = (inputValue: string) => {
    setLocalInputState(inputValue);
  };
  let id = allTodoItems.length; // TODO: перерисовывается весь массив, нужно переделать
  const submitNewTodoItem = () => {
    dispatch(
      addTodoItem({
        id: id++,
        todoItemText: localInputState,
        completed: false,
        priorityStatus: '',
      }),
    );
  };

  return (
    <div>
      <input
        value={localInputState}
        onChange={(e) => onChangeInputHandler(e.currentTarget.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={submitNewTodoItem}>submit</button>
    </div>
  );
};

export default TodoHeader;
