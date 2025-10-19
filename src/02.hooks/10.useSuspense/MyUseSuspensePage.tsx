import { Suspense, useEffect, useMemo, useState } from 'react';
import { UsersTable } from './UserTable';
import { fetchUserById, fetchUsers } from './queries';
import { SelectedUserInfo } from './SelectedUserInfo';

export const MyUseSuspensePage = () => {
  const [limit, setLimite] = useState(10);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleUserSelected = (user: string) => {
    setSelectedUser(user);
  };

  //Avoid requesting all users unless the limit changes
  const usersQuery = useMemo(() => fetchUsers(limit), [limit]);

  const handleUnselectSelectedUser = () => setSelectedUser(null);

  useEffect(() => {
    setSelectedUser(null);
  }, [limit]);

  // Suspense required the suspended component to be wrapped inside Suspense component
  // The best practice is to send an Usable to the child component specially when you need params.
  // You can have nested Suspense components to handle different loading states
  return (
    <>
      <div>
        <label> Limit Users: </label>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimite(Number(e.target.value))}
        />
      </div>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsersTable
          usersQuery={usersQuery}
          onUserSelected={handleUserSelected}
        />
        <Suspense fallback={<p>Loading user...</p>}>
          <SelectedUserInfo
            userQuery={selectedUser ? fetchUserById(selectedUser) : null}
            onUnselect={handleUnselectSelectedUser}
          />
        </Suspense>
      </Suspense>
    </>
  );
};
