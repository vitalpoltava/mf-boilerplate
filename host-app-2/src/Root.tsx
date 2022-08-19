import React, {useEffect, useState} from "react";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import PubSub from "pubsub-js";
import AppState from "@/State";
import {Events} from "@/Events";
import ExtForm from "@/ExtForm";
import Login from "@/Login";
import ExtList from "@/ExtList";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showFormSentAlert, setShowFormSentAlert] = useState<boolean>(false);
  const [isFormSentSuccess, setIsFormSentSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    PubSub.subscribe(Events.EXT_BUTTON_CLICK, () => {
      navigate("list/form")
    });
    PubSub.subscribe(Events.EXT_FORM_SENT, (ch: string, success: boolean) => {
      navigate("/list");
      setIsFormSentSuccess(success);
      setShowFormSentAlert(true);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="login" element={
        isLoggedIn ? <Navigate to={"/list"}/> :
          <Login state={AppState} setIsLoggedIn={setIsLoggedIn}/>
      }/>
      <Route path="list" element={
        !isLoggedIn ? <Navigate to={"/login"}/> :
          <ExtList isFormSentSuccess={isFormSentSuccess} showFormSentAlert={showFormSentAlert}
                   setShowFormSentAlert={setShowFormSentAlert}/>
      }/>
      <Route path="list/form" element={<ExtForm/>}/>
    </Routes>
  )
}

export default Root;
