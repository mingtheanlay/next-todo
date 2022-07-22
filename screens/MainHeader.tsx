import { useState } from 'react';
import { InputField } from '../components/InputField';

export const MainHeader = ({ handleAddTodo }) => {
  const [data, setData] = useState();

  function handleInputChange(e: any) {
    setData(e.target.value);
  }

  return (
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
};
