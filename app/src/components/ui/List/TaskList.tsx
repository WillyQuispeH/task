import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { Category, Task } from "@/interfaces/type";
import TaskCard from "../Card/TaskCard";

import styles from "./List.module.scss";
import { useTask } from "@/store/hooks";

interface TaskListProps {
  category: Category;
  tasks: Task[];
  moveTask: (task: Task, fromCategory: Category, toCategory: Category) => void;
}

const TaskList: React.FC<TaskListProps> = ({ category, tasks, moveTask }) => {
  const { setModalNew } = useTask();
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item: { task: Task; fromCategory: Category }) => {
      if (category) {
        moveTask(item.task, item.fromCategory, category);
      } else {
        console.error("Category is undefined in drop");
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const ref = useRef<HTMLDivElement>(null);

  drop(ref);

  return (
    <div
      ref={ref}
      className={`task-list ${isOver ? "highlight" : ""} ${styles.list}`}
    >
      <div className={styles.header}>
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      </div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          fromCategory={category}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
