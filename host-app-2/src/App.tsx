import React from "react";
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import Root from "@/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/index.css";

const App = () => (
  <BrowserRouter>
    <Root/>
  </BrowserRouter>
);
const root = createRoot(document.getElementById("app")!);
root.render(<App/>);
