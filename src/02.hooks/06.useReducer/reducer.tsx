import type { TaskStore, Task } from './types';

//Reducer is used for managing complex state logic in React components.
// It provides a way to handle state transitions based on actions,
// making it easier to manage and update state in a predictable manner.

export type TaskListActions =
  | { type: 'addTask'; payload: { title: string } }
  | { type: 'removeTask'; payload: { id: number } }
  | { type: 'markAsCompleted'; payload: { id: number } };

export const getTasknItialState = () => {
  return {
    tasks: [] as Task[],
    taskCount: 0,
  } as TaskStore;
};

export const taskListReducer = (state: TaskStore, action: TaskListActions) => {
  switch (action.type) {
    case 'addTask': {
      const nextId =
        state.tasks.length > 0
          ? Math.max(...state.tasks.map((t) => t.id)) + 1
          : 1;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: nextId, state: 'pending', title: action.payload.title } as Task,
        ],
        taskCount: state.taskCount + 1,
      };
    }
    case 'removeTask': {
      const filteredTasks = state.tasks.filter(
        (t) => t.id !== action.payload.id
      );
      return {
        ...state,
        tasks: filteredTasks,
        taskCount: filteredTasks.length,
      };
    }
    case 'markAsCompleted': {
      const updatedTasks = state.tasks.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, state: 'completed' as const };
        } else {
          return t;
        }
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
  }
};
