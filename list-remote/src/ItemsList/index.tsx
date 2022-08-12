import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert';
import Header from "./Header";
import Item from "./Item";
import {getBooks, setToken} from "../http/fetchers";
import {BehaviorSubject} from "rxjs";

type Props = {
  token$: BehaviorSubject<string>,
}

function List({token$}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Listen to auth token update
    const tokenSubscription = token$ && token$.subscribe((token) => {
      setToken(token);

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
        })
    });

    if (!tokenSubscription) {
      setIsError(true);
      setIsLoaded(true);
    }

    return () => {
      tokenSubscription && tokenSubscription.unsubscribe();
    }
  }, [])

  return (
    <Container>
      <Header/>
      {!isLoaded && <div>Loading List...</div>}
      {isLoaded && isError && <Alert className="mt-2" key="warning" variant="warning">Loading failed!</Alert>}
      {isLoaded && items.map((item: any) => <Item key={item.id} book={item}/>)}
    </Container>
  );
}

export default List;
