import React from "react";
import { createRoot } from 'react-dom/client';
import LoginForm from "./LoginForm";

import "./index.css";

const App = () => (
  <div className="p-5">
    <LoginForm />
  </div>
);
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
