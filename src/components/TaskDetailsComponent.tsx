'use client';

import TaskContext from "@/context/Taskcontext";
import { Task } from "@/types/task";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";

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
            <p className="text-gray-600 font-bold text-[2vw] text-center">Task Details</p>
            <div className="grid grid-cols-3 gap-y-3">
                <p>Title</p>
                <p className="col-span-2">{task.title}</p>
                <p>Description</p>
                <p className="col-span-2 overflow-y-auto h-[15vw] invisible-scrollbar py-1">
                    {task.description}
                </p>
                <div className="flex space-x-2 col-span-3">
                    <div>
                        <p className={`text-sm p-1`}>{task.progress}</p>
                    </div>
                    <div>
                        <p className={`text-sm p-1`}>{task.priority}</p>
                    </div>
                </div>
                <button className="p-2 w-full bg-blue-500 rounded-md text-white col-span-3 cursor-pointer" onClick={() => redirect("/")}>
                    Back
                </button>
            </div>
        </div>
    );
}
