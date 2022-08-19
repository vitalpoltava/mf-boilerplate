import React, {Suspense} from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {loadFormModule} from "service/Utils";
import {Events} from "@/Events";

const ExtForm = () => {
  const RemoteForm: any = React.lazy(loadFormModule());

  return (
    <Container>
      <Card className="m-auto mt-5 bg-light w-50">
        <Card.Header>External Form</Card.Header>
        <Card.Body>
          <Suspense fallback={<div>Loading external form...</div>}>
            <RemoteForm Events={Events}/>
          </Suspense>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ExtForm;
