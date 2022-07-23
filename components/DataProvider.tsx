import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { ITodos } from '../data/interface';

export const DataContext = createContext(null);

export const DataProvider: React.FC<any> = props => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const URL = '/api/todo';

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios
      .get(URL)
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => console.log(err));
  }

  async function addTodo(todo: string) {
    const newTodo = {
      id: Date.now(),
      todo: todo,
      isCompleted: false,
      createdAt: new Date().toISOString()
    };

    try {
      (await todos.find(x => x.todo === todo))
        ? alert('Todo is already in the list')
        : axios
            .post(URL, newTodo)
            .then(() => {
              setTodos([...todos, newTodo]);
            })
            .catch(err => {
              throw new Error(err);
            });
    } catch (error) {
      console.log(error);
    }
  }

  async function completeTodo(id: string) {
    const updatedTodo = todos.find(x => x.id === parseInt(id));

    try {
      await axios
        .put(`${URL}/${id}`, {
          todo: updatedTodo.todo,
          isCompleted: true
        })
        .then(() => {
          const newTodo = todos.map(x => {
            if (x.id === parseInt(id)) {
              x.isCompleted = !x.isCompleted;
            }
            return x;
          });
          setTodos(newTodo);
        })
        .catch(err => {
          throw new Error(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DataContext.Provider value={[todos, setTodos, addTodo, completeTodo]}>
      {props.children}
    </DataContext.Provider>
  );
};
