'use client';

import React from 'react';
import { useDroppable } from '@dnd-kit/core';

import { Progress, Task } from "@/types/task";
import TaskComponent from "./TaskComponent";

interface CompProps {
    tasks: Task[]
    progress: Progress
    total: number;
}

export default function ProgressCanvas({ tasks, progress, total = 0 }: CompProps) {
    const [openField, setOpenField] = React.useState(false);

    const { setNodeRef } = useDroppable({
        id: progress,
    });

    return (
        <div
            ref={setNodeRef}
            className="w-[30%] min-h-[35vw] max-h-fit rounded-md shadow-md bg-gray-200 hover:shadow-lg flex flex-col justify-between p-5"
        >
            <div className="pl-5 space-x-2 pb-5">
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
            </div>
            <div className="p-1 space-y-1 invisible-scrollbar overflow-y-auto h-[80%]">
                {tasks.map((task, taskIdx) =>
                    <TaskComponent key={taskIdx} data={task} />
                )}
            </div>
            <div className='mt-5 space-y-2'>
                <button className="cursor-pointer bg-blue-800 py-2 px-5 text-white rounded-md" onClick={() => { setOpenField(!openField) }}>
                    Create
                </button>
                <div className={`${openField ? '' : 'hidden'} space-y-3`}>
                    <form
                        className='space-y-2 bg-white p-2 rounded-md'
                        action=""
                    >
                        <input
                            type="text" placeholder='Title' className='border w-full p-2 rounded-sm'
                        />
                        <textarea
                            placeholder='input the description here'
                            rows={5}
                            className='border w-full p-2 rounded-sm'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}