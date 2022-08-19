import React, {Suspense} from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import AppState from "@/State";
import {loadListModule} from "service/Utils";
import {Events} from "@/Events";

type Props = {
  isFormSentSuccess: boolean,
  showFormSentAlert: boolean,
  setShowFormSentAlert: Function,
}

export const Notification = ({isFormSentSuccess, showFormSentAlert, setShowFormSentAlert}: Props) => {
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

const ExtList = ({isFormSentSuccess, showFormSentAlert, setShowFormSentAlert}: Props) => {
  const List = React.lazy(loadListModule());

  return (
    <>
      <Notification isFormSentSuccess={isFormSentSuccess} showFormSentAlert={showFormSentAlert}
                    setShowFormSentAlert={setShowFormSentAlert}/>
      <Suspense fallback={<div>Loading List Form...</div>}>
        <List token$={AppState.token$} Events={Events}/>
      </Suspense>
    </>
  );
}

export default ExtList;
