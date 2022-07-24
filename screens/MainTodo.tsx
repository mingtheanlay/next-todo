import React, { useContext } from 'react';
import { Card } from '../components/Card';
import { DataContext } from '../components/DataProvider';
import { ITodos } from '../data/interface';
interface Props {
  todos: any[];
  handleCompleteTodo: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
  isEdit: string;
  setIsEdit: (target: string) => void;
  setData: (data: any) => void;
}

export const MainTodo: React.FC<Props> = ({
  todos,
  handleCompleteTodo,
  handleRemoveTodo,
  isEdit,
  setIsEdit,
  setData
}) => {
  return (
    <>
      {true ? (
        <ul className="flex flex-col items-center justify-center gap-2 py-4">
          {todos.map(x => (
            <Card
              key={x.id}
              id={x.id}
              title={x.todo}
              isCompleted={x.isCompleted}
              handleCompleteTodo={handleCompleteTodo}
              handleRemoveTodo={handleRemoveTodo}
              setIsEdit={setIsEdit}
              setData={setData}
              classNames={isEdit === x.id ? 'border-blue-500' : ''}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center text-3xl font-bold text-gray-500">No result</p>
      )}
    </>
  );
};
