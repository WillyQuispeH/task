export interface Task {
  id: number;
  content: string;
  date: string;
  title: string;
}

export type Category = "pendientes" | "proceso" | "terminadas";

export type TaskState = {
  [key in Category]: Task[];
};
