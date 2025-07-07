'use client'

import React from "react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { Priority, Task } from "@/types/task"

import { SquareCheck, ChevronsDown, ChevronUp, AlignJustify } from "lucide-react"
import TaskContext from "@/context/Taskcontext"

interface CompProps {
    data: Task;
}

export default function TaskComponent({ data }: CompProps) {
    const { handleEditDatatask } = React.useContext(TaskContext);

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: data.id,
    });

    const style: React.CSSProperties = {
        transform: CSS.Translate.toString(transform),
        zIndex: transform ? 50 : 1,
        position: transform ? 'absolute' : 'static',
        width: transform ? '88.5%' : '100%'
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
        >
            <div className="bg-white p-4 space-y-3">
                <div
                    className="space-y-3 cursor-grab"
                    {...listeners}
                    {...attributes}
                >
                    <p>{data.title}</p>
                    <div className="flex w-full justify-between items-center">
                        <div
                            className="flex justify-center items-center space-x-1 text-[1vw]">
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

                <div className="flex items-center space-x-2">
                    <button
                        className="px-2 py-1 bg-yellow-300 text-[10px] rounded-lg font-semibold cursor-pointer hover:bg-yellow-500"
                        onClick={() => { handleEditDatatask(data) }}
                    >
                        edit
                    </button>
                    <button className="px-2 py-1 bg-red-500 text-[10px] rounded-lg font-semibold cursor-pointer text-white hover:bg-red-800">
                        delete
                    </button>
                </div>
            </div>
        </div>
    )
}