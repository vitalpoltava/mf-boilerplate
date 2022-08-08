import React, {Suspense} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {loadFederatedModule} from "root/HostUtils";
import Config from "../configs";

const ExtFormPopup = ({show, handleClose, PubSub}: any) => {
  const extFormSubscriber = (ch: string, success: boolean) => {
    handleClose();
  };
  const RemoteForm: any =
    React.lazy(loadFederatedModule(Config.EXT_FORM_URL, 'form', './RemoteForm'));

  PubSub.subscribe("EXT_FORM_SENT", extFormSubscriber);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>External Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Suspense fallback={<div>Loading form...</div>}>
          <RemoteForm name="Here will be form" PubSub={PubSub}/>
        </Suspense>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ExtFormPopup;
