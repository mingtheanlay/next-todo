import { ITodos } from 'pages/api/todo/interface';
import { supabase } from 'util/supabaseClient';

export default async function handler(req, res) {
  const data = await fetchTodos();

  switch (req.method) {
    case 'GET':
      try {
        res.status(200).json(data);
      } catch (error) {
        return res.status(400).json({ message: 'Bad Request' });
      }
      break;
    case 'POST':
      try {
        await addTodos(req.body);
        res.status(201).json(await findTodos(req.body.id));
      } catch (error) {
        return res.status(400).json({ message: 'Bad Request' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method Not Allowed`);
      break;
  }
}

export const fetchTodos = async () => {
  const { data, error } = await supabase
    .from('todos')
    .select();
  return data;
}

export const addTodos = async (todo: ITodos) => {
  await supabase
    .from('todos')
    .insert([
      {
        id: todo.id,
        todo: todo.todo,
        isCompleted: todo.isCompleted,
        createdat: todo.createdAt
      }
    ])
}

export const findTodos = async (id: number) => {
  const { data, error } = await supabase
    .from('todos')
    .select()
    .match({ id });
  return data;
}


