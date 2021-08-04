import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Authentication.css";
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div>
      <div className="container-fluid ps-0">
        <Row className="mx-0">
          <Col xs={12} md={6} className="ps-0 img-col-css">
            <img src={"/image/Nk.png"} className="img-fluid w-100 img-css" />
          </Col>

          <Col xs={12} md={6}>
            <div className="P-150">
              <h1>Change password!</h1>
              <p>Your identity has been verified!</p>
              <p>Set your new Password..</p>

              <div className="d-grid gap-2">
                <div>
                  <MDBInput
                    label="New Password"
                    id="typePassword"
                    type="password"
                  />
                  <div id="textExample1" className="form-text">
                    Minimum 8 character password
                  </div>
                  <MDBInput
                    label="Confirm Password"
                    id="typePassword"
                    type="password"
                    className="mt20"
                  />
                </div>
                <Link to={"/Login"}>
                  <div class="d-grid p-2">
                    <MDBBtn className="buttontext" color="info">Update</MDBBtn>
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

export default ChangePassword;
