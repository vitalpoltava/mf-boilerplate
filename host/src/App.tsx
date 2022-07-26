import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import HostApp from "./Host";
import { loadFederatedModule } from "./loadFederatedModule";
import Config from "./configs";

// Load remote fragment
const RemoteApp = React.lazy(loadFederatedModule(Config.REMOTE_URL, 'remoteapp', './RemoteRoot'));

import "./index.css";

const App = () => (
  <table className="main-table">
    <thead>
      <tr>
        <th>Host app</th>
        <th>remote app</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <HostApp />
        </td>
        <td>
          <Suspense fallback={<div>Loading...</div>}>
            <RemoteApp />
          </Suspense>
        </td>
      </tr>
    </tbody>
  </table>
);

const root = createRoot(document.getElementById("app")!);
root.render(<App />);