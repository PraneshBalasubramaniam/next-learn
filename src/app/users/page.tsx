interface Type {
  id: number;
  name: string;
  username: string;
  email: `${string}@${string}`;
}

const UsersPage = async () => {
  const users: Type[] = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { next: { revalidate: 10 } }
  ).then(res => res.json());

  return (
    <div>
      <div>Users:</div>
      <div>{new Date().toLocaleTimeString()}</div>
      <div>
        {users.map(({ id, name }) => (
          <div key={id}>
            {id}. {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
