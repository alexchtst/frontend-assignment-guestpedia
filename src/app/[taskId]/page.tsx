import TaskDetailsComponent from "@/components/TaskDetailsComponent";

interface PageProps {
    params: Promise<{ taskId: string }>
}

export default async function TaskDetailPage({ params }: PageProps) {
    const { taskId } = await params;

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <TaskDetailsComponent taskId={taskId} />
        </div>
    );

};