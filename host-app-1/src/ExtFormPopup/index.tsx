import React, {Suspense} from "react";
import {useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {loadFederatedModule} from "service/Utils";
import Config from "../configs";
import {Events} from "../Events";

const ExtFormPopup = ({show}: {show: boolean}) => {
  const navigate = useNavigate();
  const RemoteForm: any =
    React.lazy(loadFederatedModule(Config.EXT_FORM_URL, 'form', './RemoteForm'));

  return (
    <Modal show={show} onHide={() => navigate("/list")}>
      <Modal.Header closeButton>
        <Modal.Title>External Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Suspense fallback={<div>Loading external form...</div>}>
          <RemoteForm Events={Events} />
        </Suspense>
      </Modal.Body>
    </Modal>
  )
}

export default ExtFormPopup;
