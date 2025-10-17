import { useReducer, useState } from "react"
import { MyButton } from "../../01.component/MyButton"
import { getTasknItialState, taskListReducer } from "./reducer"


export const MyUseReducerPage = () => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [taskState, taskDispatch] = useReducer(taskListReducer, getTasknItialState());

    const { tasks, taskCount } = taskState


    const addNewTask = () => {
        if (newTaskTitle.trim().length === 0) {
            return;
        }

        taskDispatch({ type: 'addTask', payload: { title: newTaskTitle } });
        setNewTaskTitle('');
    }

    const markAsCompleted = (id: number) => {
        taskDispatch({ type: 'markAsCompleted', payload: { id: id } });
    }

    const removeTask = (id: number) => {
        taskDispatch({ type: 'removeTask', payload: { id: id } });
    }

    return (
        <div>
            <h1>Use Reducer</h1>
            <div>
                <label>Add Task </label>
                <input type="text" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} placeholder="Task Title" />
                <MyButton label='Add Task' onClick={addNewTask} variant='primary' />
            </div>
            <hr />

            <h2>Your Tasks ({taskCount})</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(t =>
                            <tr key={t.id}>
                                <td>{t.title}</td>
                                <td>{t.state === 'pending' ? 'Pending' : 'Completed'}</td>
                                <td> {t.state === 'pending' && <MyButton label="Mark As Complted" onClick={() => markAsCompleted(t.id)} />} <MyButton label="Remove" onClick={() => removeTask(t.id)} /> </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}