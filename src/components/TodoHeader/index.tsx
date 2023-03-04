import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addTodoItem } from '../../redux/slices/todoListSlice';

const TodoHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const [localInputState, setLocalInputState] = useState<string>('');

  const onChangeInputHandler = (inputValue: string) => {
    setLocalInputState(inputValue);
  };

  const submitNewTodoItem = () => {
    dispatch(
      addTodoItem({
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
