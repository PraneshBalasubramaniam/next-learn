export const CorrectUser = () => {
  return <div>Correct User</div>;
};

export const WrongUser = () => {
  return <div>Wrong User</div>;
};

const User = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: {};
}) => {
  if (!isFinite(params.id)) return <WrongUser />;

  return <CorrectUser />;
};

export default User;
