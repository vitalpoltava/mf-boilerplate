import React, {Suspense} from "react";
import {useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {loadFormModule} from "service/Utils";
import {Events} from "@/Events";

type Props = {
  show: boolean
}

const ExtFormPopup = ({show}: Props) => {
  const navigate = useNavigate();
  const RemoteForm: any = React.lazy(loadFormModule());

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
