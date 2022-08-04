import React from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Stack from 'react-bootstrap/Stack';
import {RootProps} from "@/exposed-types";
import List from "./ItemsList";
import 'bootstrap/dist/css/bootstrap.min.css';

const Root = ({name}: RootProps) => (
  <Container className="mt-2">
    <Stack direction="horizontal" gap={3}>
      <h5 className="py-2">Name: {name}</h5>
      <Button className="ms-auto" variant="warning">Open Order</Button>
    </Stack>
    <List/>
  </Container>
);

export default Root;
