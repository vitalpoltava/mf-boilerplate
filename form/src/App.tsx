import React from "react";
import { createRoot } from 'react-dom/client';
import FormWrapper from "./FormWrapper";

import "./styles/index.css";

const App = () => (<FormWrapper name="Local Form Run" />);
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
