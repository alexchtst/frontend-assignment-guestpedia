import React from "react";

import { ToasterContextInterface } from "@/types/ui";

const ToasterContext = React.createContext<ToasterContextInterface>({
  openToaster: false,
  handleShow: () => {},
  toasterData: { title: "", content: "" },
});

export default ToasterContext;
