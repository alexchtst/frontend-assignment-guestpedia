import { Progress, Task } from "@/types/task";
import React from "react";

export interface TaskContextInterface {
  // for data interface
  data: Task[];
  storeData: (d: Task) => void;
  groupTasksByProgress: (d: Task[]) => {
    done: Task[];
    inprogress: Task[];
    todo: Task[];
  };
  changeTaskProgress: (taskId: string, progress: Progress) => void;

  // for modal interface
  editDatatask: Task | null;
  handleEditDatatask: (d: Task | null) => void;
}

const TaskContext = React.createContext<TaskContextInterface>({
  // for data
  data: [],
  storeData: () => {},
  groupTasksByProgress: () => ({ done: [], inprogress: [], todo: [] }),
  changeTaskProgress: () => {},

  // for modal
  editDatatask: null,
  handleEditDatatask: () => {},
});

export default TaskContext;
