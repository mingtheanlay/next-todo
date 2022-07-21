import { MainHeader } from '../screens/MainHeader';
import { MainTodo } from '../screens/MainTodo';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Wrapper } from '../components/Wrapper';

export default function Home() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios
        .get('https://nextjs-jmqepl--3000.local.webcontainer.io/api/todos')
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
