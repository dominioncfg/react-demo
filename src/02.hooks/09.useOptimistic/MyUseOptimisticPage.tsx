import { startTransition, useOptimistic, useState } from 'react';
import { MyButton } from '../../01.component/MyButton';

export const MyUseOptimisticPage = () => {
  const [newUserName, setNewUserName] = useState('');
  const [users, setNewUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [optimisticUsers, addOptimisticUser] = useOptimistic<string[], string>(
    users,
    (currentUsers, newUser) => [...currentUsers, newUser]
  );

  const addNewUser = () => {
    if (newUserName.trim().length === 0) {
      return;
    }
    setError(null);

    // ✅ Step 1: show immediately in the UI

    startTransition(async () => {
      addOptimisticUser(newUserName);

      try {
        // Step 2: simulate server delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Step 3: simulate a random failure (50% chance)
        if (Math.random() < 0.5) {
          throw new Error('Server error: failed to add comment');
        }

        //  Step 4: success → permanently update the real state
        setNewUsers((prev) => [...prev, newUserName]);
      } catch (err: unknown) {
        // ⚠️ Step 5: rollback to last known good state
        let message = 'Unknown error';
        if (err instanceof Error) {
          message = err.message;
        } else if (typeof err === 'string') {
          message = err;
        } else {
          message = String(err);
        }
        setError(message);
        setNewUsers((prev) => [...prev]); // restores previous state
      }
    });
  };
  return (
    <div>
      <h1>Use Optimistic</h1>
      <div>
        <label>Add new User </label>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Name"
        />
        <MyButton label="Add" variant="primary" onClick={addNewUser} />
      </div>
      <hr />
      <h2>Your Users ({optimisticUsers.length})</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {optimisticUsers.map((t, i) => (
              <tr key={i}>
                <td>{t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
