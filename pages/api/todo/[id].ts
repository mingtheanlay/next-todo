import { ITodos } from 'pages/api/todo/interface';
import { supabase } from 'util/supabaseClient';

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('todos')
    .select();
  switch (req.method) {
    case 'DELETE':
      try {
        const data = await deletePost(req.query.id);
        res.status(200).json(data);
      } catch (error) {
        return res.status(400).json({ message: 'Bad Request' });
      }
      break;
    case 'PUT':
      try {
        const data = await updatePost(req.query.id, req.body);
        res.status(200).json(data);
      } catch (error) {
        return res.status(400).json({ message: 'Bad Request' });
      }
      break;
    default:
      res.setHeader('Allow', ['DELETE', 'PUT']);
      res.status(405).end(`Method Not Allowed`);
      break;
  }
}

export const deletePost = async (id: number) => {
  const { data, error } = await supabase
    .from('todos')
    .delete()
    .match({ id });
  return data
}

export const updatePost = async (id: number, todo: ITodos) => {
  const { data, error } = await supabase
    .from('todos')
    .update(
      {
        todo: todo.todo,
        isCompleted: todo.isCompleted,
      }
    )
    .match({ id: id });
  return data
}
