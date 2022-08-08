import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {submitForm} from "./http/fetchers";

type Props = {
  PubSub: PubSubJS.Base
}

const FormWrapper = ({ PubSub }: Props) => {
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
          PubSub.publish("EXT_FORM_SENT", true);
        })
        .catch(() => {
          // Notify externals about failed attempt to send form
          PubSub.publish("EXT_FORM_SENT", false);
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
              name="firstName"
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback type="invalid">Required!</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              name="lastName"
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback type="invalid">Required!</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" placeholder="City" required/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              City is valid!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
}

export default FormWrapper;
