interface PageProps {
    params: Promise<{ taskId: string }>
}

export default async function TaskDetailPage({ params }: PageProps) {
    const { taskId } = await params;

    return (
        <div>
            {taskId}
        </div>
    );

};