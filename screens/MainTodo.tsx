import React, { useContext } from 'react';
import { Card } from '../components/Card';
import { DataContext } from '../components/DataProvider';
import { ITodos } from '../data/interface';
interface Props {
  handleCompleteTodo: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
  setIsEdit: (target: string) => void;
  setData: (data: any) => void;
}

export const MainTodo: React.FC<Props> = ({
  handleCompleteTodo,
  handleRemoveTodo,
  setIsEdit,
  setData
}) => {
  const [todos] = useContext<ITodos[]>(DataContext);
  return (
    <ul className="flex flex-col items-center justify-center gap-2 py-4">
      {Array.isArray(todos) &&
        todos.map(x => (
          <Card
            key={x.id}
            id={x.id}
            title={x.todo}
            isCompleted={x.isCompleted}
            handleCompleteTodo={handleCompleteTodo}
            handleRemoveTodo={handleRemoveTodo}
            setIsEdit={setIsEdit}
            setData={setData}
          />
        ))}
    </ul>
  );
};
