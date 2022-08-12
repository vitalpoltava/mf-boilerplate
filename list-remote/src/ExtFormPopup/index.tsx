import React, {Suspense} from "react";
import Modal from 'react-bootstrap/Modal';
import {loadFederatedModule} from "root/HostUtils";
import {Events} from "host/Events";
import Config from "../configs";

const ExtFormPopup = ({show, handleClose, PubSub}: any) => {
  const RemoteForm: any =
    React.lazy(loadFederatedModule(Config.EXT_FORM_URL, 'form', './RemoteForm'));

  // Listening to event from another microfrontend
  PubSub.subscribe(Events.EXT_FORM_SENT, handleClose);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>External Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Suspense fallback={<div>Loading external form...</div>}>
          <RemoteForm PubSub={PubSub} />
        </Suspense>
      </Modal.Body>
    </Modal>
  )
}

export default ExtFormPopup;
