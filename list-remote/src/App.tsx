import React from "react";
import { createRoot } from 'react-dom/client';
import Root from "./Root";

import "./styles/index.css";

const App = () => (<Root name="Local Run" />);
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
