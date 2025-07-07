'use client'

import { DndContext, DragEndEvent } from '@dnd-kit/core';

import ProgressCanvas from "@/components/ProgressCanvas"
import { Progress } from "@/types/task"

import TaskContext from '@/context/Taskcontext';
import { useContext } from 'react';
import EditTaskmodal from '@/components/EditTaskModal';


export default function Home() {
  const {
    data,
    groupTasksByProgress,
    changeTaskProgress,
    editDatatask
  } = useContext(TaskContext);

  function handleDragEndEvent(e: DragEndEvent) {
    const { active, over } = e;

    if (over && active.id !== over.id) {
      console.log(`Dragged ${active.id} over ${over.id}`);
      if (over) {
        const taskId = active.id.toString();
        const newProgress = over.id.toString() as Progress;
        changeTaskProgress(taskId, newProgress);
      }
    }
  }

  const { done, inprogress, todo } = groupTasksByProgress(data);

  return (
    <DndContext onDragEnd={handleDragEndEvent}>
      
      <EditTaskmodal data={editDatatask} />

      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-row justify-around w-full py-10">
          <ProgressCanvas
            progress={Progress.TODO}
            total={todo.length}
            tasks={todo}
          />
          <ProgressCanvas
            progress={Progress.IN_PROGRESS}
            total={inprogress.length}
            tasks={inprogress}
          />
          <ProgressCanvas
            progress={Progress.DONE}
            total={done.length}
            tasks={done}
          />
        </div>
      </div>
    </DndContext>
  )
}