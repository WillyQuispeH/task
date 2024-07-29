import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { Category, Task } from "@/interfaces/type";

import styles from "./Card.module.scss";
import { useTask } from "@/store/hooks";

interface TaskCardProps {
  task: Task;
  fromCategory: Category;
  moveTask: (task: Task, fromCategory: Category, toCategory: Category) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  fromCategory,
  moveTask,
}) => {
  const { setModalNew } = useTask();

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { task, fromCategory },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const dropResult = monitor.getDropResult() as { category: Category };
        if (dropResult.category) {
          moveTask(item.task, item.fromCategory, dropResult.category);
        } else {
          console.error("Drop result category is undefined");
        }
      }
    },
  });

  const ref = useRef<HTMLDivElement>(null);
  drag(ref);

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <span>{task.date}</span>
      <h1>{task.title}</h1>
      <p>{task.content}</p>
    </div>
  );
};

export default TaskCard;
