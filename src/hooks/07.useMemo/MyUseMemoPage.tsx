import { useMemo, useState } from "react"
import { MyButton } from "../../01.component/MyButton"

const users = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
];

export const MyUseMemoPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [count, setCounter] = useState(0);

    const filteredUsers = useMemo(() => {
        console.log("Filtering users with memo...");
        return users.filter(user =>
            user.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);


    const searchFilteredUsersWithoutMemo = () => {
        console.log("Filtering users without memo...");
        return users.filter(user =>
            user.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    const filteredUsersWithoutMemo = searchFilteredUsersWithoutMemo();
    return (
        <div>
            <h1>Use Memo</h1>
            <div>
                <label>Search For Users </label>
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Name" />
                <MyButton label='Increase Counter' variant='primary' onClick={()=>setCounter(count + 1)} />
            </div>
            <hr />
            <h2>Trigger Counter Rerender({count})</h2>
            <h2>Your  Users ({filteredUsers.length})</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((t, i) =>
                            <tr key={i}>
                                <td>{t}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <h2>Your  Users Without Memo ({filteredUsersWithoutMemo.length})</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsersWithoutMemo.map((t, i) =>
                            <tr key={i}>
                                <td>{t}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}