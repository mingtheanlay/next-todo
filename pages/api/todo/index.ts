import { todos } from '../../../data/data';

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        res.status(200).json(todos);
      } catch (error) {
        return res.status(400).json({ message: 'Bad Request' });
      }
      break;
    case 'POST':
      try {
        todos.push(req.body);
        res.status(201).json(todos);
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
