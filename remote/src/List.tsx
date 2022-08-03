import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getBooks } from "./http/fetchers"

function List() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    getBooks().then((books) => {
      setItems(books);
      setIsLoaded(true);
    })
  }, [])

  return (
    <Container>
      <Row>
        <Col className="py-1 bg-info" sm={2}>Book ID</Col>
        <Col className="py-1 bg-info" sm>Title</Col>
        <Col className="py-1 bg-info" sm>Author</Col>
      </Row>
      {!isLoaded && <div>Loading List...</div>}
      {isLoaded && items.map((item: any) => (
        <Row key={item.id}>
          <Col className="py-1 bg-light" sm={2}>{item.id}</Col>
          <Col className="py-1 bg-light" sm>{item.title}</Col>
          <Col className="py-1 bg-light" sm>{item.authors[0]?.name}</Col>
        </Row>
      ))}
    </Container>
  );
}

export default List;
