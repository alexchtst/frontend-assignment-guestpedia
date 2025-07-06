'use client'

import { DndContext } from '@dnd-kit/core';

import ProgressCanvas from "@/components/ProgressCanvas"
import { Progress } from "@/types/task"

export default function Home() {
  return (
    <DndContext>
      <div className="flex w-full h-screen justify-center items-center">
        <div className="flex flex-row justify-around w-full">
          <ProgressCanvas progress={Progress.TODO} total={10} />
          <ProgressCanvas progress={Progress.IN_PROGRESS} total={20} />
          <ProgressCanvas progress={Progress.DONE} total={20} />
        </div>
      </div>
    </DndContext>
  )
}