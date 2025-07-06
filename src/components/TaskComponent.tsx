'use client'

import React from "react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { Task } from "@/types/task"

interface CompProps {
    data: Task;
}

export default function TaskComponent({ data }: CompProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: data.id,
    });

    const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div
            className="bg-white p-4 space-y-3 cursor-grab"
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            <p>Voluptate commodo dolore id eiusmod ullamco deserunt.</p>
            <div className="flex w-full justify-between items-center">
                <div>Icon</div>
                <div>{data.priority}</div>
            </div>
        </div>
    )
}