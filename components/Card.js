import { Button } from './Button';

export const Card = ({ id, title, isCompleted, handleCompleteTodo }) => {
  return (
    <li className='w-full items-center border-2 p-4 flex justify-between group'>
      <h3
        className={`font-bold p-3 w-4/6 text-lg ${
          isCompleted && 'line-through'
        }`}
      >
        {title}
      </h3>
      <div className='w-2/6'>
        <div className='gap-3 h-10 group-hover:flex justify-end hidden'>
          <Button
            onClick={() => handleCompleteTodo(id)}
            name={isCompleted ? 'Mark as Incomplete' : 'Mark Complete'}
            classNames='bg-green-500 hover:bg-green-300'
          />
          <Button name='Edit' classNames='bg-blue-500 hover:bg-blue-300' />
          <Button name='Remove' classNames='bg-red-500 hover:bg-red-300' />
        </div>
      </div>
    </li>
  );
};
