import React from "react";
import PubSub from "pubsub-js";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import List from "./ItemsList";

type Props = {
  token$: any,
  Events: {[key: string]: string}
}

const Root = ({token$, Events}: Props) => {
  const showForm = () => PubSub.publish(Events.EXT_BUTTON_CLICK, true);

  return (
    <Container className="mt-2">
      <Stack className="mb-2" direction="horizontal" gap={3}>
        <Button onClick={showForm} className="ms-auto" variant="warning">Open External Form</Button>
      </Stack>
      <List token$={token$}/>
    </Container>
  );
}

export default Root;
