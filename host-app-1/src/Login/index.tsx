import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import tokenGenerator from "@/auth";

const Login = ({setIsLoggedIn, state}: any) => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    if (!isValid) {
      event.stopPropagation();
    }

    setValidated(true);
    const fd = new FormData(form);
    if (isValid) {
      setIsLoggedIn(true);
      // update generator here
      const token = fd.get("input-token") as string || "";
      state.token$ = tokenGenerator(token)
    }
  };

  return (
    <Container>
      <Card className="m-auto mt-5 bg-light w-50">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Input your personal access token here</Form.Label>
                <Form.Control
                  required
                  name="input-token"
                  type="text"
                  placeholder="Login personal token"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">Required!</Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login;
