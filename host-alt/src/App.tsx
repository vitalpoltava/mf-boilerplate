import React from "react";
import { createRoot } from 'react-dom/client';
import Root from "./Root";

import "./index.css";

const App = () => (<Root />);
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
