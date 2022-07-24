import React from 'react';
import { Card } from '../components/Card';
interface Props {
  todos: any[];
  handleCompleteTodo: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
  editTarget: string;
  setEditTarget: (target: string) => void;
  setData: (data: any) => void;
}

export const MainTodo: React.FC<Props> = ({
  todos,
  handleCompleteTodo,
  handleRemoveTodo,
  editTarget,
  setEditTarget,
  setData
}) => {
  return (
    <>
      {todos.length > 0 ? (
        <ul className="flex flex-col items-center justify-center gap-2 py-4">
          {todos.map(x => (
            <Card
              key={x.id}
              id={x.id}
              title={x.todo}
              isCompleted={x.isCompleted}
              handleCompleteTodo={handleCompleteTodo}
              handleRemoveTodo={handleRemoveTodo}
              setEditTarget={setEditTarget}
              setData={setData}
              classNames={editTarget === x.id ? 'border-blue-500' : ''}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center text-3xl font-bold text-gray-500">
          No result. Create a new one instead!
        </p>
      )}
    </>
  );
};
