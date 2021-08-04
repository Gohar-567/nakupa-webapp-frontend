import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Authentication.css";
import { Link } from "react-router-dom";
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";

function SignUp() {
  return (
    <div className="container-fluid ps-0">
      <Row className="mx-0">
        <Col xs={12} md={6} className="ps-0 img-col-css">
          <img src={"/image/Nk.png"} className="img-fluid w-100 img-css" />
        </Col>

        <Col xs={12} md={6}>
          <div className="P-80">
            <h1>Get Started</h1>
            <p>Tell us who you are</p>

            <div className="d-grid gap-3">
              <MDBRow>
                <MDBCol size="6" className="col-example">
                  <MDBInput label="First Name" id="typeText" type="text" />
                </MDBCol>
                <MDBCol size="6" className="col-example">
                  <MDBInput label="Last Name" id="typeText" type="text" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="12" className="col-example">
                  <MDBInput
                    label="Email"
                    id="typeEmail"
                    type="email"
                    placeholder="@gmail.com"
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol size="6" className="col-example">
                  <div>
                    <MDBInput
                      label="Password"
                      id="typePassword"
                      type="password"
                    />
                    <div id="textExample1" className="form-text">
                      Minimum 8 character password
                    </div>
                  </div>
                </MDBCol>
                <MDBCol size="6" className="col-example">
                  <MDBInput
                    label="Confirm Password"
                    id="typePassword"
                    type="password"
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol size="6" className="col-example">
                  <MDBProgress className="rounded-pill" height="15">
                    <MDBProgressBar
                      className="bg-success"
                      width="50"
                      valuemin={0}
                      valuemax={100}
                    >
                      50%
                    </MDBProgressBar>
                  </MDBProgress>
                </MDBCol>
                <MDBCol size="6" className="col-example"></MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol size="6" className="col-example">
                  <MDBInput label="Phone Number" id="typePhone" type="tel" />
                </MDBCol>
                <MDBCol size="6" className="col-example">
                  <select className="browser-default custom-select">
                    <option>Country</option>
                    <option value="1">USA</option>
                    <option value="2">UK</option>
                    <option value="3">Africa</option>
                  </select>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol size="6" className="col-example">
                  <select className="browser-default custom-select">
                    <option>State</option>
                    <option value="1">Florida</option>
                    <option value="2">Taxes</option>
                    <option value="3">California</option>
                  </select>
                </MDBCol>
                <MDBCol size="6" className="col-example">
                  <select className="browser-default custom-select">
                    <option>City</option>
                    <option value="1">Houston</option>
                    <option value="2">Auston</option>
                    <option value="3">El pacu</option>
                  </select>
                </MDBCol>
              </MDBRow>

              <Link to={"/Login"}>
                <div class="d-grid p-2">
                  <MDBBtn className="buttontext" color="info">Creat Account</MDBBtn>
                </div>
              </Link>

              <div class="p-2 t1-btm">
                <span>
                  Already have an account?
                  <Link to={"/Login"}>Login!</Link>
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
