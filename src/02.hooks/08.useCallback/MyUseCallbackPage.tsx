import { useCallback, useState } from 'react';
import { MyButton } from '../../01.component/MyButton';
import { UserRow } from './MyUserRow';

export const MyUseCallbackPage = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [count, setCounter] = useState(0);

  const handleUserSelectedWithoutUseCallback = (name: string) => {
    setSelectedUser(name);
  };

  const handleUserSelectedWithUseCallback = useCallback((name: string) => {
    setSelectedUser(name);
  }, []);

  return (
    <div>
      <h1>Use Callback</h1>
      <div>
        <MyButton
          label="Increase Counter"
          variant="primary"
          onClick={() => setCounter(count + 1)}
        />
      </div>
      <hr />
      <h2>Trigger Counter Rerender({count})</h2>
      <h2>Your Users</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <UserRow
              name="Without Callback User"
              onSelected={handleUserSelectedWithoutUseCallback}
            />
            <UserRow
              name="With Callback User"
              onSelected={handleUserSelectedWithUseCallback}
            />
          </tbody>
        </table>
      </div>
      <h3>Your Selected User is: {selectedUser}</h3>
    </div>
  );
};
