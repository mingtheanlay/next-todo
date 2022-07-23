interface Props {
  name: string;
  classNames: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ name, classNames, onClick }) => (
  <button onClick={onClick} className={`rounded-md px-3 text-sm text-white ${classNames}`}>
    {name}
  </button>
);
