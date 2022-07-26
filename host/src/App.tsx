import React from "react";
import { createRoot } from 'react-dom/client';
import HostApp from "./Host";
import { loadFederatedModule } from "./loadFederatedModule";

const url = `http://localhost:3001/remoteEntry.js`;
const RemoteApp = React.lazy(loadFederatedModule( url, 'remoteapp', './RemoteRoot'));

import "./index.css";

const App = () => (
  <table className="main-table">
    <thead>
      <th>Host app</th>
      <th>remote app</th>
    </thead>
    <tbody>
      <tr>
        <td>
          <HostApp />
        </td>
        <td>
          <RemoteApp />
        </td>
      </tr>
    </tbody>
  </table>
);

const root = createRoot(document.getElementById("app")!);
root.render(<App />);