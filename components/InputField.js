export const InputField = ({ onChange, value }) => (
  <input
    className='w-full border-2 border-slate-900 p-2 focus:outline-none'
    type='text'
    placeholder='Add todo'
    value={value || ''}
    onChange={onChange}
    required
  />
);
