import { useState } from 'react';
import { InputField } from '../components/InputField';

interface Props {
  handleAddTodo: (todo: string) => void;
  data: string;
  setData: (data: any) => void;
  handleInputChange: (e: any) => void;
}

export const MainHeader: React.FC<Props> = ({
  handleAddTodo,
  data,
  setData,
  handleInputChange
}) => (
  <>
    <h1 className="flex items-center justify-center pb-4 text-5xl font-bold">Todo List</h1>
    <div className="flex gap-4">
      <form
        className="w-full"
        onSubmit={e => {
          e.preventDefault();
          handleAddTodo(data);
          setData(null);
        }}
      >
        <InputField onChange={handleInputChange} value={data} />
      </form>
    </div>
  </>
);
