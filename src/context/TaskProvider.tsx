'use client'

import React from "react";
import TaskContext from "./Taskcontext";
import { Progress, Task } from "@/types/task";

interface Props {
    children: React.ReactNode
}

export default function TaskContextProvider({ children }: Props) {
    const [taskData, setTaskData] = React.useState<Task[]>([]);

    React.useEffect(() => {
        const stored = localStorage.getItem("tasks");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setTaskData(parsed);
                }
            } catch (e) {
                console.error("Failed to parse tasks from localStorage", e);
            }
        }
    }, []);

    const addData = (data: Task) => {
        setTaskData(prev => {
            const updated = [...prev, data];
            localStorage.setItem("tasks", JSON.stringify(updated));
            return updated;
        });
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