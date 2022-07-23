interface Props {
  onChange: (e: any) => void;
  value: string;
}

export const InputField: React.FC<Props> = ({ onChange, value }) => (
  <input
    className="w-full rounded-md border-2 border-slate-900 p-2 focus:outline-none"
    type="text"
    placeholder="Add todo"
    value={value || ''}
    onChange={e => onChange(e)}
    required
  />
);
