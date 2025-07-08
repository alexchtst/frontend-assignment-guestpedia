'use client';

import React from 'react';
import { useDroppable } from '@dnd-kit/core';

import { Priority, Progress, Task } from "@/types/task";
import TaskComponent from "./TaskComponent";
import GenerateId from '@/lib/idGen';
import TaskContext from '@/context/Taskcontext';

import { OctagonX } from "lucide-react"
import ToasterContext from '@/context/Toastercontext';
import { PropgressCanvasProps } from '@/types/ui';

export default function ProgressCanvas({ tasks, progress, total = 0 }: PropgressCanvasProps) {

    const { storeData } = React.useContext(TaskContext);
    const { handleShow } = React.useContext(ToasterContext);

    // form submission
    const [openField, setOpenField] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [priority, setPriority] = React.useState<Priority>(Priority.MEDIUM);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // some validation
        if (!title.trim()) return;
        if (!desc.trim()) return;

        const task: Task = {
            id: GenerateId(),
            title: title,
            description: desc,
            progress: progress,
            // set as default to medium
            priority: priority
        }

        console.log(task);

        setTitle('');
        setDesc('');
        setPriority(Priority.MEDIUM);
        setOpenField(false);
        storeData(task);

        handleShow({title: "Berhasil", content: "Data berashil ditambakan"})
    }

    const { setNodeRef } = useDroppable({
        id: progress.toString(),
    });

    return (
        <div
            ref={setNodeRef}
            className={`
                    relative w-[30%] rounded-md shadow-md bg-gray-200 hover:shadow-lg flex flex-col justify-between p-5 
                    ${!openField ? 'h-[35vw]' : 'h-[50vw]'}
                `}
        >
            <div className="pl-5 space-x-2 pb-2">
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
                <button
                    className={`cursor-pointer bg-blue-800 py-2 px-5 text-white rounded-md ${openField ? 'hidden' : ''}`}
                    onClick={() => { setOpenField(true) }}
                >
                    Create
                </button>
                <div className={`relative ${openField ? '' : 'hidden'} space-y-3`}>
                    <div className='absolute -right-3 -top-3 bg-red-500 p-1 rounded-full cursor-pointer' onClick={() => setOpenField(false)}>
                        <OctagonX color='white' size={15} />
                    </div>
                    <form
                        className='space-y-2 bg-white p-2 rounded-md'
                        onSubmit={handleSubmit}
                    >
                        <div className='flex space-x-2'>
                            <input
                                type="text"
                                placeholder='Title'
                                className='border w-full p-2 rounded-sm'
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <select
                                className="border w-full p-2 rounded-sm"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value as Priority)}
                            >
                                {Object.values(Priority).map((value) => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <textarea
                            placeholder='input the description here'
                            rows={2}
                            className='border w-full p-2 rounded-sm resize-none'
                            required
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <button className="cursor-pointer bg-blue-800 hover:bg-blue-900 py-2 px-5 text-white rounded-md" type='submit'>
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}