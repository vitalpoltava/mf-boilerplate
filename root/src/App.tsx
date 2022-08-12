import React, {Suspense} from "react";
import {createRoot} from "react-dom/client";
import PubSub from "pubsub-js";
import {loadFederatedModuleAsync} from "./loadFederatedModule";
import {getHostname, getHostUrl} from "./http/getHostUrl";
import "./index.css";


const App = () => {
  const RemoteApp =
    React.lazy(loadFederatedModuleAsync(getHostUrl(), getHostname(), './RemoteApp'))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RemoteApp PubSub={PubSub}/>
    </Suspense>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App/>);
