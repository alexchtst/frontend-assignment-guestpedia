'use client';

import { ComponenChildInterface, ToasterProps } from "@/types/ui";
import ToasterContext from "./Toastercontext";
import { useState } from "react";

export default function ToasterProvider({ children }: ComponenChildInterface) {
    const [openToaster, setOpenToaster] = useState(false);
    const [data, setData] = useState<ToasterProps>({ title: "", content: "" });

    function handleOpenToaster(d: ToasterProps) {
        setOpenToaster(true);
        setData(d);

        setTimeout(() => {
            setOpenToaster(false);
        }, 3000);
    }

    return (
        <ToasterContext.Provider value={{
            openToaster: openToaster,
            handleShow: handleOpenToaster,
            toasterData: data
        }}>
            {children}
        </ToasterContext.Provider>
    )
}