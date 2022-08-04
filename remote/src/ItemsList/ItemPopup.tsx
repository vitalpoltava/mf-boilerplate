import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ItemPopup = ({show, handleClose, book}: any) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title><div className="text-success">{book.title}</div></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="my-2">
          <div className="fw-bold px-1 d-inline-block">Author(s)</div>: {book.authors.map((author: any) => (<div key={author.name} className="my-2 d-inline-block">{author.name}</div>))}
        </div>
        <div><div className="fw-bold px-1 d-inline-block">Bookshelves</div>: {book.bookshelves?.join(', ') || "none"}</div>
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
