import React from "react";
import Login from "./Authentecation/Login";
import SignUp from "./Authentecation/SignUp";
import RoleSelection from "./Authentecation/RoleSelection";
import ForgotPassword from "./Authentecation/ForgotPassword";
import ChangePassword from "./Authentecation/ChangePassword";
import VarificationCode from "./Authentecation/VarificationCode";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/SignUp" component={SignUp}></Route>
        <Route exact path="/RoleSelection" component={RoleSelection}></Route>
        <Route exact path="/ForgotPassword" component={ForgotPassword}></Route>
        <Route exact path="/ChangePassword" component={ChangePassword}></Route>
        <Route exact path="/VarificationCode" component={VarificationCode}></Route>
      </Switch>

      {/* <div> */}
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
      {/* <RoleSelection></RoleSelection> */}
      {/* <ForgotPassword></ForgotPassword> */}
      {/* <ChangePassword></ChangePassword> */}
      {/* <VarificationCode></VarificationCode> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
