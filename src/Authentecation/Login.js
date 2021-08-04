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


function Login() {
  return (
    <div className="container-fluid ps-0">
      <Row className="mx-0">
        <Col xs={12} md={6} className="ps-0 img-col-css">
          <img src={"/image/Nk.png"} className="img-fluid w-100 img-css" />
        </Col>

        <Col xs={12} md={6}>
          <div className="P-80">
            <span className="icon">👋</span>
            <h1>Welcome back!</h1>
            <p className="P-left">Let's build someting great</p>

            <div className="d-grid gap-2">
              <div className="p-2">
                <MDBInput
                  label="Email"
                  id="typeEmail"
                  type="email"
                  placeholder="@gmail.com"
                />
              </div>
              <div className="p-2">
                <MDBInput label="Password" id="typePassword" type="password" />
              </div>

              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                    <div class="form-check P-left-10">
                      <input
                        class="form-check-input Cb"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label Rm" for="flexCheckDefault">
                        Remember Me
                      </label>
                    </div>
                  </MDBCol>
                  <MDBCol>
                    <Link to={"/ForgotPassword"}>Forgot Passwor?</Link>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

              <div class="d-grid p-2">
                <MDBBtn style={{backgroundColor:'#13A8B1'}} className="buttontext">Login</MDBBtn>
                {/* <button class="ripple ripple-surface btn btn-primary buttontext" role="button" style="background-color: #13A8B1 !important;">Login</button> */}
              </div>

              <div class="p-2 t0-btm">
                <span>or do it via other accounts</span>
              </div>

              <MDBContainer className="d-flex align-items-center justify-content-center">
                <MDBRow className="gx-5">
                  <MDBCol size="md" className="brdcss">
                    <a href="#" className="fb">
                      <MDBIcon fab icon="facebook-f" />
                    </a>
                  </MDBCol>
                  <MDBCol size="md" className="brdcss">
                    <a href="#" className="apple">
                      <MDBIcon fab icon="apple" />
                    </a>
                  </MDBCol>
                  <MDBCol size="md" className="brdcss">
                    <a href="#" className="google">
                      <MDBIcon fab icon="google" />
                    </a>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

              <div class="p-2 t1-btm">
                <span>
                  Dont’s have an account?
                  <Link to={"/RoleSelection"}>Sign up!</Link>
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
