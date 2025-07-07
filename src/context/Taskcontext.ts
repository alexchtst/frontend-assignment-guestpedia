import { Progress, Task } from "@/types/task";
import React from "react";

export interface TaskContextInterface {
  data: Task[];
  storeData: (d: Task) => void;
  groupTasksByProgress: (d: Task[]) => {
    done: Task[];
    inprogress: Task[];
    todo: Task[];
  };
  changeTaskProgress: (taskId: string, progress: Progress) => void;
}

const TaskContext = React.createContext<TaskContextInterface>({
  data: [],
  storeData: () => {},
  groupTasksByProgress: () => ({ done: [], inprogress: [], todo: [] }),
  changeTaskProgress: () => {}
});

export default TaskContext;
