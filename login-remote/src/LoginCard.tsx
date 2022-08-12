import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import type {BehaviorSubject} from "rxjs";
import LoginForm from "./LoginForm";

type Props = {
  PubSub?: PubSubJS.Base,
  token$: BehaviorSubject<string>,
}

const LoginCard = ({PubSub, token$}: Props) => {
  return (
    <Container>
      <Card className="m-auto mt-5 bg-light w-50">
        <Card.Header>Login</Card.Header>
        <Card.Body><LoginForm PubSub={PubSub} token$={token$} /></Card.Body>
      </Card>
    </Container>
  )
}

export default LoginCard;
