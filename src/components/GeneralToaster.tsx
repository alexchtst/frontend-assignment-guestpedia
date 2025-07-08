'use client'

import ToasterContext from "@/context/Toastercontext";
import { useContext } from "react";

export default function GeneralToaster() {
    const { openToaster, toasterData } = useContext(ToasterContext);

    return (
        <div
            className={
                `transition-all duration-500 ease-in-out 
                ${openToaster ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'} 
                fixed bottom-[2vw] right-[1vw] z-[100]`
            }
        >
            <div className="flex justify-center items-center">
                <div className="w-[32vw] h-[8vw] p-4 bg-white rounded-lg shadow-2xl space-y-2">
                    <p className="text-sm font-bold">{toasterData.title}</p>
                    <div className="text-[1.2vw]">
                        {toasterData.content}
                    </div>
                </div>
            </div>
        </div>
    )
}