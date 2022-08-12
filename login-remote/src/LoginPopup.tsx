import React, {useState} from 'react';
import type {BehaviorSubject} from "rxjs";
import Modal from 'react-bootstrap/Modal';
import LoginForm from "./LoginForm";

type Props = {
  PubSub?: PubSubJS.Base,
  token$: BehaviorSubject<string>,
}

const LoginPopup = ({PubSub, token$}: Props) => {
  const [show] = useState(true);

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Login form</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <LoginForm PubSub={PubSub} token$={token$} />
      </Modal.Body>
    </Modal>
  )
}

export default LoginPopup;
