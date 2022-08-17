import React, {Suspense} from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import Config, {AppState} from "../configs";
import {loadFederatedModule} from "service/Utils";
import {Events} from "../Events";

export const Notification = ({isFormSentSuccess, showFormSentAlert, setShowFormSentAlert}: any) => {
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast bg={isFormSentSuccess ? "success" : "warning"}
             onClose={() => setShowFormSentAlert(false)} show={showFormSentAlert} delay={3000} autohide>
        <Toast.Header closeButton={true}>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>External form sent with {isFormSentSuccess ? "success" : "failure"}!</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

const ExtList = () => {
  const List = React.lazy(loadFederatedModule(Config.LIST_URL, "remotelist", "./RemoteList"));

  return (
    <Suspense fallback={<div>Loading List Form...</div>}>
      <List token$={AppState.token$} Events={Events}/>
    </Suspense>
  );
}

export default ExtList;
