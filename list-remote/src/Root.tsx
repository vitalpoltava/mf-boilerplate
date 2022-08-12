import React, {useState, useEffect} from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import PubSubRoot from "pubsub-js";
import {Events} from "host/Events";

import List from "./ItemsList";
import ExtFormPopup from "./ExtFormPopup";

import "bootstrap/dist/css/bootstrap.min.css";
import {BehaviorSubject} from "rxjs";

type Props = {
  PubSub?: PubSubJS.Base,
  token$: BehaviorSubject<string>,
}

const Root = ({token$, PubSub}: Props) => {
  const eventBus = PubSub || PubSubRoot;

  const [show, setShow] = useState(false);
  const [isFormSentSuccess, setIsFormSentSuccess] = useState(false);
  const [showFormSentAlert, setShowFormSentAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Listening to event from another microfrontend
    const subscription = eventBus.subscribe(Events.EXT_FORM_SENT, (ch: string, success: boolean) => {
      setIsFormSentSuccess(success);
      setShowFormSentAlert(true);
    });

    return () => {
      eventBus.unsubscribe(subscription);
    }
  }, [])

  return (
    <Container className="mt-2">
      <Stack className="mb-2" direction="horizontal" gap={3}>
        <Button onClick={handleShow} className="ms-auto" variant="warning">Open External Form</Button>
      </Stack>
      <Alert
        className="mt-2"
        show={showFormSentAlert}
        variant={isFormSentSuccess ? "success" : "danger"}
        onClose={() => setShowFormSentAlert(false)}
        dismissible
      >
        External form sent {isFormSentSuccess ? "successfully" : "unsuccessfully"}!
      </Alert>
      <List token$={token$}/>
      <ExtFormPopup show={show} handleClose={handleClose} PubSub={eventBus}/>
    </Container>
  );
}

export default Root;
