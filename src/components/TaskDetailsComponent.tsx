'use client';

import TaskContext from "@/context/Taskcontext";
import { Priority, Progress, Task } from "@/types/task";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import { SquareCheck, ChevronsDown, ChevronUp, AlignJustify } from "lucide-react"

export default function TaskDetailsComponent({ taskId }: { taskId: string }) {
    const { data } = useContext(TaskContext);
    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        const existData = data.find(t => t.id === taskId);
        if (existData) {
            setTask(existData)
        }
        console.log(task)
    }, [task, taskId, data])

    if (!task) return (
        <div className="w-[40vw] h-[32vw] rounded-lg shadow-2xl border p-5 flex flex-col justify-around items-center">
            <p>tidak ada data ditemukan</p>
            <button className="p-2 w-full bg-yellow-500 rounded-md text-white col-span-3 cursor-pointer" onClick={() => redirect("/")}>
                Back
            </button>
        </div>
    )

    return (
        <div className="w-[40vw] h-[32vw] rounded-lg shadow-2xl border p-5 space-y-2">
            <div>
                <p className="text-gray-600 font-bold text-[2vw] text-center">Task Details</p>
                <p className="text-[1vw] text-center font-bold">{task.id}</p>
            </div>
            <div className="grid grid-cols-3 gap-y-3">
                <p>Title</p>
                <p className="col-span-2">{task.title}</p>
                <p>Description</p>
                <p className="col-span-2 overflow-y-auto h-[15vw] invisible-scrollbar py-1">
                    {task.description}
                </p>
                <div className="flex justify-between items-center space-x-2 col-span-3">
                    <div className="flex items-center space-x-2">
                        {
                            task.priority === Priority.MEDIUM ? <AlignJustify color="#EF9F08" width={20} /> :
                                task.priority === Priority.LOW ? <ChevronsDown color="blue" width={25} height={20} /> :
                                    <ChevronUp color="red" width={25} height={20} />
                        }
                        <p
                            className={`
                                text-sm p-1 
                                ${task.priority === Priority.MEDIUM ? 'text-yellow-500' :
                                    task.priority === Priority.LOW ? 'text-blue-500' :
                                        'text-red-500'
                                }`
                            }
                        >
                            {task.priority}
                        </p>
                    </div>
                    <div className={`flex ${task.progress === Progress.DONE ? 'items-center space-x-2' : ''}`}>
                        {task.progress === Progress.DONE && <SquareCheck color="green" width={20} />}
                        <p
                            className={
                                `text-sm p-1 font-bold 
                                ${task.progress === Progress.TODO ? 'text-gray-500' :
                                    task.progress === Progress.IN_PROGRESS ? 'text-blue-500' :
                                        'text-green-500'
                                }`
                            }
                        >
                            {task.progress}
                        </p>
                    </div>
                </div>
                <button className="p-2 w-full bg-blue-500 hover:bg-blue-800 rounded-md text-white col-span-3 cursor-pointer" onClick={() => redirect("/")}>
                    Back
                </button>
            </div>
        </div>
    );
}
