import React, { useContext } from 'react';
import { Card } from '../components/Card';
import { DataContext } from '../components/DataProvider';

export const MainTodo = ({ handleCompleteTodo }) => {
  const [todos, setTodos] = useContext(DataContext);
  return (
    <ul className='flex flex-col items-center justify-center gap-2 py-4'>
      {Array.isArray(todos) &&
        todos.map((x) => (
          <Card
            key={x.id}
            id={x.id}
            title={x.todo}
            isCompleted={x.isCompleted}
            handleCompleteTodo={handleCompleteTodo}
          />
        ))}
    </ul>
  );
};
