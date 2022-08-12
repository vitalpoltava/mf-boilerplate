import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Events} from "host/Events";
import {submitForm} from "./http/fetchers";

import "bootstrap/dist/css/bootstrap.min.css";
import {BehaviorSubject} from "rxjs";

type Props = {
  PubSub?: PubSubJS.Base,
  token$: BehaviorSubject<string>,
}

const LoginForm = ({PubSub, token$}: Props) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    if (!isValid) {
      event.stopPropagation();
    }

    setValidated(true);
    const data: any = {}
    const fd = new FormData(form);
    fd.forEach((value, key) => data[key] = value);
    if (isValid) {
      submitForm(data)
        .then((res) => res.json())
        .then((data) => {
          // Notify externals about successfully sent form
          PubSub && PubSub.publish(Events.EXT_LOGIN_SENT, true);

          // Update auth token
          token$ && token$.next(data.authToken);
        })
        .catch(() => {
          // Notify externals about failed attempt to send form
          PubSub && PubSub.publish(Events.EXT_LOGIN_SENT, false);
        });
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              name="login"
              type="text"
              placeholder="Login"
              defaultValue="Mark"
            />
            <Form.Control.Feedback type="invalid">Required!</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              type="password"
              placeholder="Password"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">Required!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default LoginForm;
