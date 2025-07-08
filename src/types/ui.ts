import { Progress, Task } from "./task";

export interface ToasterProps {
  title: string;
  content: string;
}

export interface ToasterContextInterface {
  openToaster: boolean;
  toasterData: ToasterProps;
  handleShow: (d: ToasterProps) => void;
}

export interface ComponenChildInterface {
  children: React.ReactNode;
}

export interface PropgressCanvasProps {
  tasks: Task[];
  progress: Progress;
  total: number;
}

export interface ComponentDataInterface {
    data: Task | null;
}