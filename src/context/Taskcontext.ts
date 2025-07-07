import { Progress, Task } from "@/types/task";
import React from "react";

export interface TaskContextInterface {
  // for data interface
  data: Task[];
  storeData: (d: Task) => void;
  editData: (d: Task) => void;
  deleteData: (id: string) => void;
  groupTasksByProgress: (d: Task[]) => {
    done: Task[];
    inprogress: Task[];
    todo: Task[];
  };
  changeTaskProgress: (taskId: string, progress: Progress) => void;

  // for modal interface
  editDatatask: Task | null;
  setEditDatatask: (d: Task | null) => void;
}

const TaskContext = React.createContext<TaskContextInterface>({
  // for data
  data: [],
  storeData: () => {},
  editData: () => {},
  deleteData: () => {},
  groupTasksByProgress: () => ({ done: [], inprogress: [], todo: [] }),
  changeTaskProgress: () => {},

  // for modal
  editDatatask: null,
  setEditDatatask: () => {},
});

export default TaskContext;
