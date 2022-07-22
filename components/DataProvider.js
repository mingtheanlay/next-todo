import axios from 'axios';
import React, { useEffect, useState, createContext } from 'react';

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const [todos, setTodos] = useState('');
  const URL = '/api/todo';

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(URL)
        .then((res) => {
          setTodos(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      todo: todo,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    // Check if todo is already in the list
    todos.find((x) => x.todo === todo)
      ? alert('Todo is already in the list')
      : axios
          .post(URL, newTodo)
          .then(() => {
            setTodos([...todos, newTodo]);
          })
          .catch((err) => console.log(err));
  };

  const completeTodo = (id) => {
    const updatedTodo = todos.find((x) => x.id === parseInt(id));
    // PUT todo to server
    axios
      .put(`${URL}/${id}`, {
        todo: updatedTodo.todo,
        isCompleted: !updatedTodo.isCompleted,
      })
      .then(() => {
        const newTodo = todos.map((x) => {
          if (x.id === parseInt(id)) {
            x.isCompleted = !updatedTodo.isCompleted;
          }
          return x;
        });
        setTodos(newTodo);
      })
      .catch((err) => console.log(err));
  };

  return (
    <DataContext.Provider value={[todos, setTodos, addTodo, completeTodo]}>
      {props.children}
    </DataContext.Provider>
  );
};
