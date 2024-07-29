import React from "react";
import { taskStore } from "../zustand";

const useTask = () => {
  const { errorUi, isErrorUi, isLoadingUi, modalNew, tasks } = taskStore(
    (state) => ({
      modalNew: state.modalNew,
      tasks: state.tasks,
      isLoadingUi: state.isLoading,
      isErrorUi: state.isError,
      errorUi: state.error,
    })
  );

  const { setModalNew, setTasks, addTask, moveTask } = taskStore();

  return {
    setTasks,
    setModalNew,
    moveTask,
    addTask,
    tasks,
    errorUi,
    isErrorUi,
    isLoadingUi,
    modalNew,
  };
};

export default useTask;
