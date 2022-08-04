import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert';
import Header from "./Header";
import Item from "./Item";
import {getBooks} from "../http/fetchers";

function List() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getBooks()
      .then((books) => {
        setItems(books);
      }).catch(() => {
      setIsError(true);
    })
      .finally(() => {
        setIsLoaded(true);
      })
  }, [])

  return (
    <Container>
      <Header />
      {!isLoaded && <div>Loading List...</div>}
      {isLoaded && isError && <Alert className="mt-2" key="warning" variant="warning">Loading failed!</Alert>}
      {isLoaded && items.map((item: any) => <Item key={item.id} book={item}/>)}
    </Container>
  );
}

export default List;
