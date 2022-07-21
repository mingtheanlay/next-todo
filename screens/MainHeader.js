import React, { useState } from 'react';
import { InputField } from '../components/InputField';

export const MainHeader = () => {
  const [data, setData] = useState();

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const handleAddTodo = (e, data) => {
    e.preventDefault();
    console.log(data);
    setData('');
  };

  return (
    <>
      <h1 className='flex items-center pb-4 justify-center text-4xl font-bold'>
        Todo List
      </h1>
      <div className='flex gap-4'>
        <form className='w-full' onSubmit={(e) => handleAddTodo(e, data)}>
          <InputField onChange={handleInputChange} value={data} />
        </form>
      </div>
    </>
  );
};
