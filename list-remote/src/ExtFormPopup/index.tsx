import React, {Suspense} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {loadFederatedModule} from "root/HostUtils";
import Config from "../configs";

const ExtFormPopup = ({show, handleClose}: any) => {
  const RemoteForm: any =
    React.lazy(loadFederatedModule(Config.EXT_FORM_URL, 'form', './RemoteForm'));

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>External Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Suspense fallback={<div>Loading form...</div>}>
          <RemoteForm name="Here will be form"/>
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
