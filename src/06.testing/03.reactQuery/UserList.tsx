import { useGetUsers } from './hooks/useUsers';

export const UserList = () => {
  const users = useGetUsers();

  return (
    <>
      {users.isLoading && (
        <div>
          <h3>Loading...</h3>
        </div>
      )}

      {users.data && (
        <div>
          <h2>Your Users ({users.data.length})</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {users.data?.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.fullName}</td>
                  <td>{u.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
