import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert';
import Header from "./Header";
import Item from "./Item";
import {getBooks, setToken} from "../http/fetchers";

type Props = {
  token$: any,
}

function List({token$}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Listen to auth token update
    const tokenUpdate$ = token$ && token$.next().value;

    tokenUpdate$.then(({authToken}: {authToken: string}) => {
      if (authToken) {
        setToken(authToken);

        getBooks()
          .then((books) => {
            setIsError(false);
            setItems(books);
          })
          .catch(() => {
            setIsError(true);
          })
          .finally(() => {
            setIsLoaded(true);
          });
      }
    })
  }, [])

  return (
    <Container>
      <Header/>
      {!isLoaded && <Alert className="mt-2" key="warning" variant="warning">No items to display..</Alert>}
      {isLoaded && isError && <Alert className="mt-2" key="warning" variant="warning">Loading failed!</Alert>}
      {isLoaded && items.map((item: any) => <Item key={item.id} book={item}/>)}
    </Container>
  );
}

export default List;
