import { Button } from './Button';

interface Props {
  id: string;
  title: string;
  isCompleted: boolean;
  handleCompleteTodo: (id: string) => void;
}

export const Card = ({ id, title, isCompleted, handleCompleteTodo }) => (
  <li className="group flex w-full items-center justify-between border-2 p-4">
    <h3 className={`w-4/6 p-3 text-lg font-semibold ${isCompleted && 'line-through'}`}>{title}</h3>
    <div className="w-2/6">
      <div className="hidden h-10 justify-end gap-3 group-hover:flex">
        <Button
          onClick={() => handleCompleteTodo(id)}
          name={isCompleted ? 'Mark as Incomplete' : 'Mark Complete'}
          classNames="bg-green-500 hover:bg-green-300"
        />
        {/* <Button name="Edit" classNames="bg-blue-500 hover:bg-blue-300" />
          <Button name="Remove" classNames="bg-red-500 hover:bg-red-300" /> */}
      </div>
    </div>
  </li>
);
