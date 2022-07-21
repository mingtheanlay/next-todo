import React from 'react';
import { Card } from '../components/Card';
import { TodoContext } from '../context/TodoContext';

export const MainTodo = ({ data }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 py-4'>
      <TodoContext.Provider value={'hello'}>
        {Array.isArray(data) &&
          data.map((x) => (
            <Card key={x.id} title={x.todo} isCompleted={x.isCompleted} />
          ))}
      </TodoContext.Provider>
    </div>
  );
};
