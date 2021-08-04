import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import InputCode from "./InputCode";
import { Link } from "react-router-dom";
import "./Authentication.css";
import ChangePassword from "./ChangePassword";
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function VarificationCode() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="container-fluid ps-0">
        <Row className="mx-0">
          <Col xs={12} md={6} className="ps-0 img-col-css">
            <img src={"/image/Nk.png"} className="img-fluid w-100 img-css" />
          </Col>

          <Col xs={12} md={6}>
            <div className="p-135">
              <h1 className="P-left">Verification!</h1>
              <p className="P-left">
                A code has been sent to your email. Verify your email!
              </p>

              <div className="App mt30">
                <InputCode
                  length={4}
                  // label="Code Label"
                  loading={loading}
                  onComplete={(code) => {
                    setLoading(true);
                    setTimeout(() => setLoading(false), 10000);
                  }}
                />
              </div>

              <div className="d-grid gap-2 mt30">
                <div class="d-grid p-2">
                  <text className="resendcss">
                    Didn’t received code?
                    <a style={{ color: "blue", textDecoration: "underline" }}>
                      Resend!
                    </a>
                  </text>
                </div>
                {/* <Link to={"/ChangePassword"}> */}
                  <div class="d-grid p-2">
                    <MDBBtn className="buttontext" color="info">Verify</MDBBtn>
                  </div>
                {/* </Link> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
//ReactDOM.render(<ChangePassword />, rootElement);
 ReactDOM.render(<VarificationCode />, rootElement);

export default VarificationCode;
