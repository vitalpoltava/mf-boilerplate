import React, {Suspense} from "react";
import {loadFederatedModule} from "root/HostUtils";
import Config from "./configs";

type Props = {
  PubSub: PubSubJS.Base
}

const Root = ({ PubSub }: Props) => {
  const RemoteList: any =
    React.lazy(loadFederatedModule(Config.LIST_URL, "remotelist", "./RemoteList"));

  return (
    <Suspense fallback={<div>Loading List...</div>}>
      <RemoteList PubSub={PubSub} />
    </Suspense>
  )
}

export default Root;
