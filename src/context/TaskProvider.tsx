'use client'

import React from "react";
import TaskContext from "./Taskcontext";
import { Task } from "@/types/task";

interface Props {
    children: React.ReactNode
}

export default function TaskContextProvider({ children }: Props) {
    const [taskData, setTaskData] = React.useState<Task[]>([]);

    const addData = (data: Task) => {
        setTaskData(prev => [...prev, data])
    }

    return (
        <TaskContext.Provider value={{ data: taskData, changeData: addData }}>
            {children}
        </TaskContext.Provider>
    )
}