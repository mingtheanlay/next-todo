import { ITodos } from 'pages/api/todo/interface';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../components/DataProvider';
import { Wrapper } from '../components/Wrapper';
import { MainHeader } from '../screens/MainHeader';
import { MainTodo } from '../screens/MainTodo';

export default function Home() {
  const [todos, setTodos, addTodo, completeTodo, removeTodo, editTodo] = useContext(DataContext);

  const [data, setData] = useState();

  const [editTarget, setEditTarget] = useState('');

  const [searchResult, setSearchResult] = useState<string>();

  const [dataState, setDataStae] = useState<ITodos[]>(todos);

  useEffect(() => {
    if (searchResult) {
      const target = todos.filter(x =>
        x.todo.toLocaleLowerCase().includes(searchResult.toLocaleLowerCase())
      );
      setDataStae([...target]);
    } else {
      setDataStae([...todos]);
    }
  }, [searchResult, todos]);

  return (
    <Wrapper>
      <MainHeader
        data={data}
        editTarget={editTarget}
        setEditTarget={setEditTarget}
        setData={setData}
        handleEditTodo={editTodo}
        handleAddTodo={addTodo}
        handleSearchResult={setSearchResult}
      />
      <MainTodo
        todos={dataState}
        handleCompleteTodo={completeTodo}
        handleRemoveTodo={removeTodo}
        editTarget={editTarget}
        setEditTarget={setEditTarget}
        setData={setData}
      />
    </Wrapper>
  );
}
