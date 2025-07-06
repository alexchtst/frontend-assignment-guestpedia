'use client'

import React from "react";
import TaskContext from "./Taskcontext";
import { Task } from "@/types/task";

interface Props {
    children: React.ReactNode
}

export default function TaskContextProvider({ children }: Props) {
    const [createdLayouts, setCreatedLayouts] = React.useState<Task[]>([]);

    const addCreatedLayout = (data: Task) => {
        setCreatedLayouts(prev => [...prev, data])
    }

    return (
        <TaskContext.Provider value={{ data: createdLayouts, changeData: addCreatedLayout }}>
            {children}
        </TaskContext.Provider>
    )
}