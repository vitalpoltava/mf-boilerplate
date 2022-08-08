import React, {Suspense} from "react";
import {loadFederatedModule} from "root/HostUtils";
import Config from "./configs";

const Root = () => {
  const RemoteList: any =
    React.lazy(loadFederatedModule(Config.LIST_URL, "remotelist", "./RemoteList"));

  return (
    <Suspense fallback={<div>Loading List...</div>}>
      <RemoteList />
    </Suspense>
  )
}

export default Root;
