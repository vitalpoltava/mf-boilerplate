import React, {useEffect, useState} from "react";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import PubSub from "pubsub-js";
import AppState from "@/State";
import {Events} from "@/Events";
import ExtFormPopup from "@/ExtFormPopup";
import Login from "@/Login";
import ExtList from "@/ExtList";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    PubSub.subscribe(Events.EXT_FORM_SENT, () => {
      navigate("/list")
    });
    PubSub.subscribe(Events.EXT_BUTTON_CLICK, () => {
      navigate("list/form")
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
          <ExtList/>
      }>
        <Route path="form" element={
          <ExtFormPopup show={true}/>
        }/>
      </Route>
    </Routes>
  )
}

export default Root;
