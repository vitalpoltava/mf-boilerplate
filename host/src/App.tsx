import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import { loadFederatedModule } from "./loadFederatedModule";
import Config from "./configs";
import type { Shared } from "../shared/types";

// Load remote fragment
const RemoteApp: Shared.MF1RootComponent =
  React.lazy(loadFederatedModule(Config.REMOTE_URL, 'remoteapp', './RemoteRoot'));

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <RemoteApp name={Config.REMOTE_NAME} />
    </Suspense>
  </div>
);

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
