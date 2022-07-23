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

  return (
    <Wrapper>
      <MainHeader
        handleAddTodo={addTodo}
        data={data}
        setData={setData}
        handleInputChange={handleInputChange}
      />
      <MainTodo
        handleCompleteTodo={completeTodo}
        handleRemoveTodo={removeTodo}
        handleEditTodo={editTodo}
      />
    </Wrapper>
  );
}
