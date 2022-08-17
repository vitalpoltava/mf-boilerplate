import React from "react";
import { createRoot } from 'react-dom/client';
import Root from "./Root";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
const token$ = (function* () {
  yield Promise.resolve({authToken: "123"})
})()

const App = () => (<Root token$={token$} />);
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
