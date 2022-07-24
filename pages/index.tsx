import { ITodos } from 'data/interface';
import { Fragment, useContext, useEffect, useState } from 'react';
import { DataContext } from '../components/DataProvider';
import { Wrapper } from '../components/Wrapper';
import { MainHeader } from '../screens/MainHeader';
import { MainTodo } from '../screens/MainTodo';

export default function Home() {
  const [todos, setTodos, addTodo, completeTodo, removeTodo, editTodo] = useContext(DataContext);

  const [data, setData] = useState();

  const [isEdit, setIsEdit] = useState('');

  const [searchResult, setSearchResult] = useState<ITodos[]>([]);

  return (
    <Wrapper>
      <MainHeader
        data={data}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        setData={setData}
        handleEditTodo={editTodo}
        handleAddTodo={addTodo}
        handleSearchResult={setSearchResult}
      />
      <MainTodo
        todos={searchResult.length > 0 ? searchResult : todos}
        handleCompleteTodo={completeTodo}
        handleRemoveTodo={removeTodo}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        setData={setData}
      />
    </Wrapper>
  );
}
