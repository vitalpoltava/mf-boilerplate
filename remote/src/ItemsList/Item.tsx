import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import ItemPopup from "./ItemPopup";

const Item = ({book}: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  return (
    <Row>
      <Col className="py-1 bg-light" sm={2}>
        <Button onClick={handleShow} variant="link">{book.id}</Button>
      </Col>
      <Col className="py-1 bg-light" sm>{book.title}</Col>
      <Col className="py-1 bg-light" sm>{book.authors[0]?.name}</Col>
      <ItemPopup show={show} handleClose={handleClose} book={book} />
    </Row>
  )
}

export default Item;
