'use client'

import React from "react";
import TaskContext from "./Taskcontext";
import { Progress, Task } from "@/types/task";

interface Props {
    children: React.ReactNode
}

export default function TaskContextProvider({ children }: Props) {
    const [taskData, setTaskData] = React.useState<Task[]>([]);
    const [editedTaskData, setEditedTaskData] = React.useState<Task | null>(null);

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

    const exchangeTaskProgress = (taskId: string, newProgress: Progress) => {
        setTaskData(prev => {
            const updated = prev.map(task =>
                task.id === taskId
                    ? { ...task, progress: newProgress }
                    : task
            );

            localStorage.setItem("tasks", JSON.stringify(updated));
            return updated;
        });
    };

    const setEditDatatask = (d: Task | null) => {
        setEditedTaskData(d);
    }

    const handleEditData = (d: Task) => {
        setTaskData(prev => {
            const updated = prev.map(task =>
                task.id === d.id
                    ? { ...task, ...d, id: task.id }
                    : task
            );

            console.log(updated);

            localStorage.setItem("tasks", JSON.stringify(updated));

            return updated;
        });
    };

    const handleDeleteTaskById = (id: string) => {
        setTaskData(prev => {
            const updated = prev.filter(task => task.id !== id);

            localStorage.setItem("tasks", JSON.stringify(updated));

            return updated;
        });
    };



    return (
        <TaskContext.Provider value={{
            data: taskData,
            editDatatask: editedTaskData,
            storeData: addData,
            editData: handleEditData,
            deleteData: handleDeleteTaskById,
            groupTasksByProgress: getTaskByProgress,
            changeTaskProgress: exchangeTaskProgress,
            setEditDatatask: setEditDatatask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}