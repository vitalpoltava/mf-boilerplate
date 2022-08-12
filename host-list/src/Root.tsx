import React, {Suspense, useState, useEffect} from "react";
import {loadFederatedModule} from "root/HostUtils";
import PubSub from "pubsub-js";
import Config, {AppState} from "./configs";
import {Events} from "./Events";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(AppState.isLoggedIn);

  useEffect(() => {
    // Listening to event from another microfrontend
    const subscription = PubSub.subscribe(Events.EXT_LOGIN_SENT, (ch: string, success: boolean) => {
      setIsLoggedIn(success);
    });

    return () => {
      PubSub.unsubscribe(subscription);
    }
  }, []);

  const RootApp = isLoggedIn ?
    React.lazy(loadFederatedModule(Config.LIST_URL, "remotelist", "./RemoteList")) :
    React.lazy(loadFederatedModule(Config.LOGIN_FORM_URL, "login", `./Login${AppState.loginFormType}Form`));

  return (
    <Suspense fallback={<div>Loading Form...</div>}>
      <RootApp PubSub={PubSub} token$={AppState.token$}/>
    </Suspense>
  )
}

export default Root;
