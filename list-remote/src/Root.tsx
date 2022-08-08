import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Stack from 'react-bootstrap/Stack';
import {RootProps} from "./exposed-types";
import List from "./ItemsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExtFormPopup from "./ExtFormPopup";

const Root = ({name, PubSub}: RootProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="mt-2">
      <Stack direction="horizontal" gap={3}>
        <h5 className="py-2">Name: {name}</h5>
        <Button onClick={handleShow} className="ms-auto" variant="warning">Open Order Form</Button>
      </Stack>
      <List/>
      <ExtFormPopup show={show} handleClose={handleClose} PubSub={PubSub} />
    </Container>
  );
}

export default Root;
