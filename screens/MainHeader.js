import { Button } from '../components/Button';
import { InputField } from '../components/InputField';

export const MainHeader = () => (
  <div>
    <h1 className="flex items-center pb-4 justify-center text-4xl font-bold">
      Todo List
    </h1>
    <div className="flex gap-4">
      <InputField />
    </div>
  </div>
);
