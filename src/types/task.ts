export enum Progress {
    TODO = "TODO",
    IN_PROGRESS = "IN PROGRESS",
    DONE = "DONE",
}

export enum Priority {
    HIGH = "HIGH",
    MEDIUM = "MEDIUM",
    LOW = "LOW"
}

export interface Task {
    id: string;
    title: string;
    description: string;
    progress: Progress;
    priority: Priority;
}