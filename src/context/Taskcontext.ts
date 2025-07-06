import { Task } from "@/types/task";
import React from "react";

export interface TaskContextInterface {
  data: Task[];
  changeData: (d: Task) => void;
  groupTasksByProgress: (d: Task[]) => {
    done: Task[];
    inprogress: Task[];
    todo: Task[];
  };
}

const TaskContext = React.createContext<TaskContextInterface>({
  data: [],
  changeData: () => {},
  groupTasksByProgress: () => ({ done: [], inprogress: [], todo: [] }),
});

export default TaskContext;
