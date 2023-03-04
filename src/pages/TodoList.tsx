import TodoItem from '../components/TodoItem';
import { useAppSelector } from '../redux/hooks';
import { selectTodo, TodoItemProps } from '../redux/slices/todoListSlice';

const TodoList: React.FC = () => {
  const { allTodoItems } = useAppSelector(selectTodo);

  const todoItemsList = allTodoItems.map((obj: TodoItemProps, index) => {
    return <TodoItem key={index} {...obj} />;
  });
  return (
    <div>
      <div>{todoItemsList}</div>
    </div>
  );
};

export default TodoList;
