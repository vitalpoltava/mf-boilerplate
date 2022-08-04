import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ItemPopup = ({show, handleClose, book}: any) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Book #{book.id} details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>{book.title}</h6>
        <div className="mt-2">{book.authors[0]?.name}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ItemPopup;
