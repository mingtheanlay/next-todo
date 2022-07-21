export const Button = ({ name, classNames }) => (
  <button
    className={`px-3 text-white text-sm px-3 text-white text-sm" ${classNames}`}
  >
    {name}
  </button>
);
