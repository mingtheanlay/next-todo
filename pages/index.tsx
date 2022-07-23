import { useContext, useState } from 'react';
import { DataContext } from '../components/DataProvider';
import { Wrapper } from '../components/Wrapper';
import { MainHeader } from '../screens/MainHeader';
import { MainTodo } from '../screens/MainTodo';

export default function Home() {
  const [todos, setTodos, addTodo, completeTodo, removeTodo, editTodo] = useContext(DataContext);

  const [data, setData] = useState();

  function handleInputChange(e: any) {
    setData(e.target.value);
  }

  const [isEdit, setIsEdit] = useState('');

  return (
    <Wrapper>
      <MainHeader
        data={data}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        setData={setData}
        handleInputChange={handleInputChange}
        handleEditTodo={editTodo}
        handleAddTodo={addTodo}
      />
      <MainTodo
        handleCompleteTodo={completeTodo}
        handleRemoveTodo={removeTodo}
        setIsEdit={setIsEdit}
        setData={setData}
      />
    </Wrapper>
  );
}
