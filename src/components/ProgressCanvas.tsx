'use client';

import React from 'react';
import { useDroppable } from '@dnd-kit/core';

import { Priority, Progress, Task } from "@/types/task";
import TaskComponent from "./TaskComponent";
import GenerateId from '@/lib/idGen';

const tasks: Task[] = [
    {
        id: GenerateId(),
        title: "Write Unit Tests",
        description: "Add tests for critical components and utility functions.",
        progress: Progress.DONE,
        priority: Priority.LOW
    },
    {
        id: GenerateId(),
        title: "Optimize Performance",
        description: "Audit the app and fix performance bottlenecks.",
        progress: Progress.IN_PROGRESS,
        priority: Priority.MEDIUM
    },
    {
        id: GenerateId(),
        title: "Deploy to Production",
        description: "Push the stable build to the production environment.",
        progress: Progress.TODO,
        priority: Priority.HIGH
    }
];


interface CompProps {
    progress: Progress
    total: number;
}

export default function ProgressCanvas({ progress, total = 0 }: CompProps) {
    const { isOver, setNodeRef } = useDroppable({
        id: progress,
    });
    const style = {
        opacity: isOver ? 0.8 : 1,
    };
    return (
        <div
            ref={setNodeRef} style={style}
            className="w-[30%] h-[35vw] rounded-md shadow-md bg-gray-100 hover:shadow-lg p-5"
        >
            <p className="pl-5 space-x-2 pb-5">
                <span
                    className={
                        `p-1 bg-gray-300 rounded-sm text-sm font-bold
                        ${progress === Progress.DONE ?
                            'text-green-500' : progress === Progress.IN_PROGRESS ?
                                'text-blue-500' : 'text-black'
                        }`
                    }
                >
                    {progress}
                </span>
                <span>{total}</span>
            </p>
            <div className="p-1 space-y-1 invisible-scrollbar overflow-y-scroll h-[80%]">
                {tasks.map((task, taskIdx) =>
                    <TaskComponent key={taskIdx} data={task} />
                )}
            </div>
            {/* create field */}
            <button className="mt-5 cursor-pointer">
                Create
            </button>
        </div>
    )
}