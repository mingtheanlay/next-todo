import { DataContext } from 'components/DataProvider';
import { ITodos } from '../data/interface';
import { useContext } from 'react';
import { InputField } from '../components/InputField';

interface Props {
  handleAddTodo: (todo: string) => void;
  data: string;
  isEdit: string;
  setIsEdit: (target: string) => void;
  setData: (data: any) => void;
  handleEditTodo: (id: string, todo: string) => void;
  handleSearchResult: (data: ITodos[]) => void;
}

export const MainHeader: React.FC<Props> = ({
  handleAddTodo,
  data,
  setData,
  isEdit,
  setIsEdit,
  handleSearchResult,
  handleEditTodo
}) => {
  const [todos] = useContext<ITodos[]>(DataContext);
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    isEdit === '' ? handleAddTodo(data) : handleEditTodo(isEdit, data);
    setIsEdit('');
    setData('');
  };

  const findTodo = (todo: string): void => {
    const target =
      Array.isArray(todos) &&
      todos.filter(x => x.todo.toLocaleLowerCase().includes(todo.toLocaleLowerCase()));
    handleSearchResult(target);
  };

  const handleOnChange = (e: any): void => {
    setData(e.target.value);
    findTodo(e.target.value);
  };

  return (
    <>
      <h1 className="flex items-center justify-center pb-4 text-5xl font-bold">Todo List</h1>
      <div className="flex gap-4">
        <form className="w-full" onSubmit={e => handleSubmit(e)}>
          <InputField onChange={e => handleOnChange(e)} value={data} />
        </form>
      </div>
    </>
  );
};
