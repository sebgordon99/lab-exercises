export const Greeting = ({ name = "World", children }) => {
  return (
    <>
      {children}
      <div>Hello {name}</div>
    </>
  );
};
