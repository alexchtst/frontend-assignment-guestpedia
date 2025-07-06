'use client'

import React from "react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { Priority, Task } from "@/types/task"

import { SquareCheck, ChevronsDown, ChevronUp, AlignJustify } from "lucide-react"

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
            <p>{data.title}</p>
            <div className="flex w-full justify-between items-center">
                <div className="flex justify-center items-center space-x-1 text-[1vw]">
                    <SquareCheck color="blue" width={15} />
                    <p className="font-semibold text-gray-500">{data.id}</p>
                </div>
                <div>
                    {
                        data.priority === Priority.MEDIUM ? <AlignJustify color="#EF9F08" width={20} /> :
                            data.priority === Priority.LOW ? <ChevronsDown color="blue" width={25} height={20} /> :
                                <ChevronUp color="red" width={25} height={20} />
                    }
                </div>
            </div>
        </div>
    )
}