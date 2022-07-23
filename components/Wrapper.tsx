export const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="container space-y-6 rounded-md border-2 p-4">{children}</div>
);
