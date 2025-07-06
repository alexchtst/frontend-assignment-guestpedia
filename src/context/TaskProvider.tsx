'use client'

import React from "react";
import TaskContext from "./Taskcontext";
import { Progress, Task } from "@/types/task";

interface Props {
    children: React.ReactNode
}

export default function TaskContextProvider({ children }: Props) {
    const [taskData, setTaskData] = React.useState<Task[]>([]);

    const addData = (data: Task) => {
        setTaskData(prev => [...prev, data]);
        localStorage.setItem("tasks", JSON.stringify(data));
    }

    const getTaskByProgress = (data: Task[]): {
        done: Task[];
        inprogress: Task[];
        todo: Task[];
    } => {
        const doneTasks = data.filter((task: Task) => task.progress === Progress.DONE);
        const inprogressTasks = data.filter((task: Task) => task.progress === Progress.IN_PROGRESS);
        const todoTasks = data.filter((task: Task) => task.progress === Progress.TODO);
        return {
            done: doneTasks,
            inprogress: inprogressTasks,
            todo: todoTasks,
        };
    }

    return (
        <TaskContext.Provider value={{ data: taskData, changeData: addData, groupTasksByProgress: getTaskByProgress }}>
            {children}
        </TaskContext.Provider>
    )
}