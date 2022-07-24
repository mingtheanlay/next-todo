import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { ITodos } from '../data/interface';

export const DataContext = createContext(null);

export const DataProvider: React.FC<any> = props => {
  const URL = '/api/todo';
  const [todos, setTodos] = useState<ITodos[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    await axios
      .get(URL)
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => console.log(err));
  };

  const addTodo = async (todo: string): Promise<void> => {
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
  };

  const completeTodo = async (id: string): Promise<void> => {
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
  };

  const removeTodo = async (id: string): Promise<void> => {
    try {
      await axios
        .delete(`${URL}/${id}`)
        .then(() => {
          const newTodo = todos.filter(x => x.id !== parseInt(id));
          setTodos(newTodo);
        })
        .catch(err => {
          throw new Error(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async (id: string, todo: string): Promise<void> => {
    const target = todos.find(x => x.id === parseInt(id));
    const updatedTodo = {
      ...target,
      todo: todo
    };

    try {
      await axios
        .put(`${URL}/${id}`, updatedTodo)
        .then(() => {
          const newTodo = todos.map(x => {
            if (x.id === parseInt(id)) {
              x.todo = updatedTodo.todo;
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
  };

  return (
    <DataContext.Provider value={[todos, setTodos, addTodo, completeTodo, removeTodo, editTodo]}>
      {props.children}
    </DataContext.Provider>
  );
};
