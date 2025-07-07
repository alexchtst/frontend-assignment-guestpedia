'use client'
import TaskContext from "@/context/Taskcontext";
import { Priority, Progress, Task } from "@/types/task";
import React from "react";

import { X } from "lucide-react"


interface CompProps {
    data: Task | null
}

export default function EditTaskmodal({ data }: CompProps) {
    const { setEditDatatask, editData } = React.useContext(TaskContext);

    // form submission
    const [title, setTitle] = React.useState<string>(data?.title ?? '');
    const [desc, setDesc] = React.useState<string>(data?.description ?? '');
    const [priority, setPriority] = React.useState<Priority>(data?.priority ?? Priority.MEDIUM);
    const [progress, setProgress] = React.useState<Progress>(data?.progress ?? Progress.TODO);

    React.useEffect(() => {
        if (data) {
            setTitle(data.title)
            setDesc(data.description)
            setPriority(data.priority)
            setProgress(data.progress)
        }
    }, [data])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // some validation
        if (!title.trim()) return;
        if (!desc.trim()) return;

        if (data) {
            const updated: Task = {
                id: data.id,
                title: title,
                description: desc,
                priority: priority,
                progress: progress,
            }
            editData(updated)
        } else {
            console.log("data kosong")
        }

        setEditDatatask(null);

    }

    return (
        <div
            className={`
          absolute bg-black/40 z-[99]  w-full h-screen
          ${data !== null ? 'block' : 'hidden'}
        `}

        >
            <div className='flex justify-center items-center w-full h-full'>
                <div className='bg-white w-[50vw] h-[30vw] rounded-md p-8'>
                    <div className="w-full flex justify-end items-end pb-5">
                        <X className="cursor-pointer" onClick={() => { setEditDatatask(null) }} />
                    </div>
                    <form
                        className='space-y-2 bg-white p-2 rounded-md'
                        onSubmit={handleSubmit}
                    >
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
                        <select
                            className="border w-full p-2 rounded-sm"
                            value={progress}
                            onChange={(e) => setProgress(e.target.value as Progress)}
                        >
                            {Object.values(Progress).map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                        <textarea
                            placeholder='input the description here'
                            rows={2}
                            className='border w-full p-2 rounded-sm resize-none'
                            required
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <button
                            className="cursor-pointer bg-blue-800 py-2 px-5 text-white rounded-md"
                            type='submit'
                        >
                            DONE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}