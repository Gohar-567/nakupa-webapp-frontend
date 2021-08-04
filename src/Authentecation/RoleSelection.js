import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Authentication.css";
import { Link } from "react-router-dom";
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function RoleSelection() {
  return (
    <div className="container-fluid ps-0">
      <Row className="mx-0">
        <Col xs={12} md={6} className="ps-0 img-col-css">
          <img src={"/image/Nk.png"} className="img-fluid w-100 img-css" />
        </Col>

        <Col xs={12} md={6}>
          <div className="P-30" style={{ marginLeft: "70px" }}>
            <h1>Role Selection</h1>
            <p className="">
              Select the person that you are to best suits you end goal needs.
            </p>
            <div className="rs-boxcss P-20">
              <Link to={'/SignUp'}>
                <MDBContainer>
                  <MDBRow className="mb-3">
                    <MDBCol size="3" className="col-example">
                      <img
                        src={"/image/sponsor.png"}
                        className="img-fluid RSimgcss"
                        style={{ borderColor: "#13A8B1" }}
                      />
                    </MDBCol>
                    <MDBCol size="9" className="col-example">
                      <p className="cardheadingcss">Sponsor</p>
                      <text className="cardtext">
                        You will be the one sending in the payments to the
                        school on behalf relatetd students.
                      </text>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </Link>
            </div>
            <div className="rs-boxcss P-20 mt20">
              <Link to={'/SignUp'}>
                <MDBContainer>
                  <MDBRow className="mb-3">
                    <MDBCol size="3" className="col-example">
                      <img
                        src={"/image/student.png"}
                        className="img-fluid RSimgcss"
                        style={{ borderColor: "#F1C545" }}
                      />
                    </MDBCol>
                    <MDBCol size="9" className="col-example">
                      <p className="cardheadingcss">Student</p>
                      <text className="cardtext">
                        You will be the one requesting the payment for your
                        school fee’s
                      </text>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </Link>
            </div>
            <div className="rs-boxcss P-20 mt20">
              <Link to={'/SignUp'}>
                <MDBContainer>
                  <MDBRow className="mb-3">
                    <MDBCol size="3" className="col-example ">
                      <img
                        src={"/image/parent.png"}
                        className="img-fluid RSimgcss"
                        style={{ borderColor: "#912887" }}
                      />
                    </MDBCol>
                    <MDBCol size="9" className="col-example">
                      <p className="cardheadingcss">Parent</p>
                      <text className="cardtext">
                        You will be the one requesting the payment on behalf of
                        your child or ward for the school fee’s.
                      </text>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default RoleSelection;
