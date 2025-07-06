enum Progress {
    "TODO",
    "IN PROGRESS",
    "DONE"
}

enum Priority {
    "HIGH",
    "MEDIUM",
    "LOW"
}

export interface Task {
    id: string;
    title: string;
    description: string;
    progress: Progress;
    priority: Priority;
}