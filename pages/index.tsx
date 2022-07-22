import { useContext } from 'react';
import { Wrapper } from '../components/Wrapper';
import { MainHeader } from '../screens/MainHeader';
import { MainTodo } from '../screens/MainTodo';
import { DataContext } from '../components/DataProvider';

export default function Home() {
  const [todos, setTodos, addTodo, completeTodo] = useContext(DataContext);
  return (
    <Wrapper>
      <MainHeader handleAddTodo={addTodo} />
      <MainTodo handleCompleteTodo={completeTodo} />
    </Wrapper>
  );
}
