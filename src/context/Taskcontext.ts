import { Task } from "@/types/task";
import React from "react";

export interface TaskContextInterface{
    data: Task[];
    changeData: (d: Task) => void
}

const TaskContext = React.createContext<TaskContextInterface>({data: [], changeData: () => {}});

export default TaskContext;