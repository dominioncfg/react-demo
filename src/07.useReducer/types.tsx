
export type TaskStatus = "pending"|"completed";

export type Task = 
{
    id: number
    state: TaskStatus
    title: string
};


export type TaskStore = 
{
    tasks: Task[],
    taskCount: number,
}