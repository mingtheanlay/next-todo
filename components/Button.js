export const Button = ({ name, classNames, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 text-white text-sm px-3 text-white text-sm" ${classNames}`}
  >
    {name}
  </button>
);
