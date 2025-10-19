import { use, type Usable } from 'react';
import type { UserDetailsResponse } from './types';

export type SelectedUserInfoProps = {
  userQuery?: Usable<UserDetailsResponse> | null;
  onUnselect?(): void;
};

export const SelectedUserInfo = ({
  userQuery,
  onUnselect,
}: SelectedUserInfoProps) => {
  if (!userQuery) {
    return (
      <div>
        <strong>Select an user to show here</strong>
      </div>
    );
  }
  const user = use<UserDetailsResponse>(userQuery);
  return (
    <div>
      <h2>Your Selected User</h2>
      <div>
        <div>Name: {user.name}</div>
        <div>Description: {user.description}</div>
      </div>
      <div>{onUnselect && <button onClick={onUnselect}>Unselect</button>}</div>
    </div>
  );
};
