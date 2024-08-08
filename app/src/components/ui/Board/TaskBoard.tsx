import React, { useEffect, useState } from "react";
import { Category, Task, TaskState } from "@/interfaces/type";
import TaskList from "../List/TaskList";

import styles from "./Board.module.scss";
import { Modal, Overlay } from "../Modal";
import { useTask } from "@/store/hooks";

const initialState: TaskState = {
  pendientes: [],
  proceso: [],
  terminadas: [],
};

const TaskBoard: React.FC = () => {
  const { modalNew, setModalNew, addTask, tasks, moveTask } = useTask();
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskCategory, setNewTaskCategory] =
    useState<Category>("pendientes");

  const handleAddTask = () => {
    if (!newTaskContent.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      date: formatDate(new Date()),
      title: newTaskTitle,
      content: newTaskContent,
    };

    addTask(newTask, newTaskCategory);

    setNewTaskContent("");
    setNewTaskTitle("");
    setModalNew(false);
  };

  return (
    <>
      <div className={styles.board}>
        {Object.keys(tasks).map((category) => (
          <TaskList
            key={category}
            category={category as Category}
            tasks={tasks[category as Category]}
            moveTask={moveTask}
          />
        ))}
      </div>

      <Overlay active={modalNew}>
        <Modal
          title="Nueva tarea"
          onClick={() => {
            setModalNew(false);
          }}
          childrenFooter={
            <button className={styles.btnAdd} onClick={handleAddTask}>
              Agregar tarea
            </button>
          }
        >
          <div className={styles.contentForm}>
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Ingrese el Titulo de la tarea"
            />
            <textarea
              value={newTaskContent}
              onChange={(e) => setNewTaskContent(e.target.value)}
              placeholder="Ingrese el contenido de la tarea"
            />
            <select
              value={newTaskCategory}
              onChange={(e) => setNewTaskCategory(e.target.value as Category)}
            >
              {Object.keys(initialState).map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </Modal>
      </Overlay>
    </>
  );
};

export default TaskBoard;

const formatDate = (date: Date): string => {
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName}-${day}-${year}`;
};
