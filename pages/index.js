import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Wrapper } from '../components/Wrapper';
import { MainHeader } from '../screens/MainHeader';
import { MainTodo } from '../screens/MainTodo';

export default function Home() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios
        .get('/api/todos')
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <MainHeader />
      <MainTodo data={data} />
    </Wrapper>
  );
}
