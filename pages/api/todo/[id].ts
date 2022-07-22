import { todos } from '../../../data/data';

export default function handler(req, res) {
  switch (req.method) {
    case 'DELETE':
      try {
        const deletedTodo = todos.find(x => x.id === parseInt(req.query.id));
        if (deletedTodo) {
          todos.splice(todos.indexOf(deletedTodo), 1);
          res.status(200).json(todos);
        } else {
          res.status(404).json({ message: 'Not Found' });
        }
      } catch (error) {
        return res.status(400).json({ message: 'Bad Request' });
      }
      break;
    case 'PUT':
      try {
        const updatedTodo = todos.find(x => x.id === parseInt(req.query.id));
        updatedTodo.todo = req.body.todo;
        updatedTodo.isCompleted = req.body.isCompleted;
        res.status(200).json(todos);
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
