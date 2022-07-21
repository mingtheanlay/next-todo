import { todos } from '../../../data/data';

export default function handler(req, res) {
  switch (req.method) {
    case 'DELETE':
      try {
        const deletedUser = todos.find((x) => x.id === parseInt(req.query.id));
        if (deletedUser) {
          todos.splice(todos.indexOf(deletedUser), 1);
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
        const updatedUser = todos.find((x) => x.id === parseInt(req.query.id));
        updatedUser.todo = req.body.todo;
        updatedUser.isCompleted = req.body.isCompleted;
        res.status.json(todos);
      } catch (error) {
        return res.status(400).json({ message: 'Bad Request' });
      }
      break;
    default:
      res.setHeader('Allow', ['DELETE', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
