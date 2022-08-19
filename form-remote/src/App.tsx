import React from "react";
import { createRoot } from 'react-dom/client';
import FormWrapper from "@/FormWrapper";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/index.css";

const App = () => (
  <div className="p-5">
    <FormWrapper Events={{}} />
  </div>
);
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
