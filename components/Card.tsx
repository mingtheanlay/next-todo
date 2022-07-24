import { Button } from './Button';

interface Props {
  id: string;
  title: string;
  isCompleted: boolean;
  handleCompleteTodo: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
  setEditTarget: (target: string) => void;
  setData: (data: string) => void;
  classNames: string;
}

export const Card: React.FC<Props> = ({
  id,
  title,
  isCompleted,
  handleCompleteTodo,
  handleRemoveTodo,
  setEditTarget,
  setData,
  classNames
}) => {
  const handleEdit = (id: string, todo: string): void => {
    setEditTarget(id);
    setData(todo);
  };

  return (
    <li
      className={`group flex w-full items-center justify-between rounded-md border-2 p-4 ${classNames}`}
    >
      <h3 className={`w-4/6 py-7 px-2 text-xl font-semibold ${isCompleted && 'line-through'}`}>
        {title}
      </h3>
      <div className="w-2/6">
        <div className="hidden flex-col justify-end gap-3 group-hover:flex md:flex-row lg:h-10">
          <Button
            onClick={() => handleCompleteTodo(id)}
            name={isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
            classNames={
              isCompleted ? 'bg-gray-500 hover:bg-gray-300' : 'bg-green-500 hover:bg-gray-300'
            }
          />
          <Button
            name="Edit"
            classNames="bg-blue-500 hover:bg-blue-300"
            onClick={() => handleEdit(id, title)}
          />
          <Button
            name="Remove"
            classNames="bg-red-500 hover:bg-red-300"
            onClick={() => handleRemoveTodo(id)}
          />
        </div>
      </div>
    </li>
  );
};
