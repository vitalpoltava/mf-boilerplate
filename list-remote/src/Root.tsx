import React from "react";
import Container from "react-bootstrap/Container";
import List from "@/ItemsList";

type Props = {
  token$: any,
  Events: Data
}

const Root = ({token$, Events}: Props) => {
  return (
    <Container className="mt-2">
      <List token$={token$} Events={Events}/>
    </Container>
  );
}

export default Root;
