import { use, type Usable } from "react";
import type { UserListResponse } from "./types";


export type UserTableProps = {
    usersQuery: Usable<UserListResponse[]>;
    onUserSelected?: (user: string) => void;
};

export const UsersTable = (
    {
        usersQuery,
        onUserSelected
    }: UserTableProps) => {
    const users = use<UserListResponse[]>(usersQuery);

    const handleSelctedClick = onUserSelected ?? (() => {});
    return (
        <div>
            <h1>Use Suspense</h1>
            <hr />
            <h2>Your Users ({users.length})</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((t) =>
                            <tr key={t.id}>
                                <td>{t.name}</td>
                                <td>
                                    <button onClick={() => handleSelctedClick(t.id)}>Select</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}