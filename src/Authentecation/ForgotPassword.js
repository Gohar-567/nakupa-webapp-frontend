import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Authentication.css";
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function ForgotPassword() {
  return (
    <div>
      <div className="container-fluid ps-0">
        <Row className="mx-0">
          <Col xs={12} md={6} className="ps-0 img-col-css">
            <img src={"/image/Nk.png"} className="img-fluid w-100 img-css" />
          </Col>

          <Col xs={12} md={6}>
            <div className="P-150">
              <h1 className="P-left">Forgot password?</h1>
              <p className="P-left">
                Please Provide Your account's email for which you want to reset
                your password!
              </p>

              <div className="d-grid gap-2">
                <div className="p-2">
                  <MDBInput label="Email" id="typeEmail" type="email" placeholder="@gmail.com" />
                </div>
                <Link to={"/VarificationCode"}>
                <div class="d-grid p-2">
                  <MDBBtn className="buttontext" color='info'>Next</MDBBtn>
                </div>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ForgotPassword;
