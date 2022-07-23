import { InputField } from '../components/InputField';

interface Props {
  handleAddTodo: (todo: string) => void;
  data: string;
  isEdit: string;
  setIsEdit: (target: string) => void;
  setData: (data: any) => void;
  handleInputChange: (e: any) => void;
  handleEditTodo: (id: string, todo: string) => void;
}

export const MainHeader: React.FC<Props> = ({
  handleAddTodo,
  data,
  setData,
  isEdit,
  setIsEdit,
  handleInputChange,
  handleEditTodo
}) => (
  <>
    <h1 className="flex items-center justify-center pb-4 text-5xl font-bold">Todo List</h1>
    <div className="flex gap-4">
      <form
        className="w-full"
        onSubmit={e => {
          e.preventDefault();
          isEdit === '' ? handleAddTodo(data) : handleEditTodo(isEdit, data);
          setIsEdit('');
          setData('');
        }}
      >
        <InputField onChange={handleInputChange} value={data} />
      </form>
    </div>
  </>
);
