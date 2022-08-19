import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert';
import Header from "@/ItemsList/Header";
import Item from "@/ItemsList/Item";
import {getBooks, setToken, updateAuthToken} from "@/http/fetchers";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import PubSub from "pubsub-js";

type Props = {
  token$: IterableIterator<LoginResponse>,
  Events: Data
}

function List({token$, Events}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [items, setItems] = useState([]);
  const [shouldLoad, setLoad] = useState(true);

  const showForm = () => PubSub.publish(Events.EXT_BUTTON_CLICK, true);

  useEffect(() => {
    if (shouldLoad) {
      setIsLoaded(false);

      // Initiate token update (or get pending one)
      updateAuthToken(token$).then(({authToken}: LoginResponse) => {
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
      });
      setLoad(false);
    }
  }, [shouldLoad]);

  return (
    <>
      <Stack className="mb-2" direction="horizontal" gap={3}>
        <Button onClick={() => setLoad(true)} variant="info">Refresh List</Button>
        <Button onClick={showForm} className="ms-auto" variant="warning">Open External Form</Button>
      </Stack>
      <Container>
        <Header/>
        {!isLoaded && <Alert className="mt-2" key="warning" variant="warning">Loading..</Alert>}
        {isLoaded && isError && <Alert className="mt-2" key="warning" variant="warning">Loading failed!</Alert>}
        {isLoaded && items.map((item: any) => <Item key={item.id} book={item}/>)}
      </Container>
    </>
  );
}

export default List;
