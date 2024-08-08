import { Category, Task, TaskState } from "@/interfaces/type";
import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

export interface Schedule {
  time: string;
  activity: string;
  completed: boolean;
}

type taskStateStore = {
  modalNew: boolean;
  schedules: Schedule[];
  isLoading: boolean;
  isError: boolean;
  error: string;
  tasks: TaskState;
  setModalNew: (isActive: boolean) => void;
  addTask: (task: Task, category: Category) => void;
  moveTask: (task: Task, fromCategory: Category, toCategory: Category) => void;
  setTasks: (tasks: TaskState) => void;
  setSchedules: (schedules: Schedule[]) => void;
};

const store: StateCreator<taskStateStore> = (set) => ({
  tasks: {
    pendientes: [],
    proceso: [],
    terminadas: [],
  },
  schedules: [],
  modalNew: false,
  isLoading: false,
  isError: false,
  error: "",

  addTask: (task, category) =>
    set((state) => ({
      tasks: {
        ...state.tasks,
        [category]: [...state.tasks[category], task],
      },
    })),

  setSchedules: (schedules: Schedule[]) =>
    set((state) => ({
      schedules,
    })),

  moveTask: (task, fromCategory, toCategory) =>
    set((state) => {
      if (fromCategory === toCategory) return state;

      const toCategoryTasks = state.tasks[toCategory] || [];
      const taskAlreadyInCategory = toCategoryTasks.some(
        (t) => t.id === task.id
      );

      if (taskAlreadyInCategory) {
        console.warn(
          `Task with id ${task.id} already exists in category ${toCategory}`
        );
        return state;
      }

      return {
        tasks: {
          ...state.tasks,
          [fromCategory]: state.tasks[fromCategory].filter(
            (t) => t.id !== task.id
          ),
          [toCategory]: [...toCategoryTasks, task],
        },
      };
    }),
  setTasks: (tasks) => set({ tasks }),
  setModalNew: (isActive: boolean) => {
    set((state) => ({
      ...state,
      modalNew: isActive,
      isError: false,
      error: "",
    }));
  },
});

export const taskStore = create<taskStateStore>()(
  persist(store, { name: "task-gaman" })
);
