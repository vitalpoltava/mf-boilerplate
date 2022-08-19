import React, {Suspense, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import PubSub from "pubsub-js";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import AppState from "@/State";
import {loadListModule} from "service/Utils";
import {Events} from "@/Events";

const Notification = ({isFormSentSuccess, showFormSentAlert, setShowFormSentAlert}: any) => {
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
  const [showFormSentAlert, setShowFormSentAlert] = useState<boolean>(false);
  const [isFormSentSuccess, setIsFormSentSuccess] = useState<boolean>(false);
  const List = React.lazy(loadListModule());

  useEffect(() => {
    PubSub.subscribe(Events.EXT_FORM_SENT, (ch, success) => {
      setIsFormSentSuccess(success);
      setShowFormSentAlert(true);
    });
  }, []);

  return (
    <>
      <Outlet/>
      <Notification isFormSentSuccess={isFormSentSuccess} showFormSentAlert={showFormSentAlert}
                    setShowFormSentAlert={setShowFormSentAlert}/>
      <Suspense fallback={<div>Loading List Form...</div>}>
        <List token$={AppState.token$} Events={Events}/>
      </Suspense>
    </>
  );
}

export default ExtList;
