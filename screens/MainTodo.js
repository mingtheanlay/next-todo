import { Card } from '../components/Card';

export const MainTodo = ({ data }) => (
  <div className="flex flex-col items-center justify-center gap-2 py-4">
    {Array.isArray(data) &&
      data.map((x) => (
        <Card key={x.id} title={x.todo} isCompleted={x.isCompleted} />
      ))}
  </div>
);
