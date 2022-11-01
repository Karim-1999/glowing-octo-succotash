import React from "react";
import { Root } from "./components/Root";
import { createRoot } from "react-dom/client";



const root = createRoot (document.querySelector("#root"))
root.render(<Root />)