import React from "react";
import { taskStore } from "../zustand";

const useTask = () => {
  const { errorUi, isErrorUi, isLoadingUi, modalNew, tasks, schedules } =
    taskStore((state) => ({
      modalNew: state.modalNew,
      schedules: state.schedules,
      tasks: state.tasks,
      isLoadingUi: state.isLoading,
      isErrorUi: state.isError,
      errorUi: state.error,
    }));

  const { setModalNew, setTasks, addTask, moveTask, setSchedules } =
    taskStore();

  return {
    setTasks,
    setModalNew,
    moveTask,
    addTask,
    setSchedules,
    tasks,
    errorUi,
    isErrorUi,
    isLoadingUi,
    modalNew,
    schedules,
  };
};

export default useTask;
