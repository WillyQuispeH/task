"use client";
import DragAndDropContext from "@/components/funtional/DragAndDropContext";
import TaskBoard from "@/components/ui/Board";

export default function Home() {
  return (
    <DragAndDropContext>
      <TaskBoard />
    </DragAndDropContext>
  );
}
