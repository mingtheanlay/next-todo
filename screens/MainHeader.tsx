import { InputField } from '../components/InputField';

interface Props {
  handleAddTodo: (todo: string) => void;
  data: string;
  editTarget: string;
  setEditTarget: (target: string) => void;
  setData: (data: any) => void;
  handleEditTodo: (id: string, todo: string) => void;
  handleSearchResult: (todo: string) => void;
}

export const MainHeader: React.FC<Props> = ({
  handleAddTodo,
  data,
  setData,
  editTarget,
  setEditTarget,
  handleSearchResult,
  handleEditTodo
}) => {
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    editTarget === '' ? handleAddTodo(data) : handleEditTodo(editTarget, data);
    setEditTarget('');
    setData('');
    handleSearchResult('');
  };

  const findTodo = (todo: string): void => {
    handleSearchResult(todo);
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
