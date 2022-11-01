import React from "react";
import { Root } from "./components/Root";
import { createRoot } from "react-dom/client";
import "./index.css";



const root = createRoot(document.getElementById("root"))
root.render(<Root />)