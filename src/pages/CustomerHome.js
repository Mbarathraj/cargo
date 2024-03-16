import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
import "../css/CustomerHome.css";
import Form from "react-bootstrap/Form";
import flight from "../assests/img/port-7092233_1920.jpg";
import Login from "../components/Login";
import Registration from "../components/Registration";
import PriceFinder from "./PriceFinder";

function CustomerHome() {
  return (
    <Container fluid="md ">
      <Row className="p-1 navbar d-flex align-items-center">
        <Col className="col-md-4 col-12">
          <div className="logo">
            <h3 className="text-md-start text-center">Cargo</h3>
          </div>
        </Col>
        <Col className="col-md-8 col-12 ">
          <ul className="d-flex gap-3  align-items-center justify-content-md-end justify-content-center  p-1">
            <li className="text-center ">
              <button onClick={() => {document.querySelector('.priceFinder').classList.add("show")
              document.querySelector('.signUp').classList.remove("show")  
              document.querySelector('.signIn').classList.remove("show")
            }
              
            }
              >Price Finder</button>
            </li>
            <li className="">
              <button onClick={() => {
              document.querySelector('.signIn').classList.add("show")
              document.querySelector('.priceFinder').classList.remove('show')  
              document.querySelector('.signUp').classList.remove("show")
            }
              
            }>Sign In</button>
            </li>
            <li className="">
              <button  onClick={() => {
                document.querySelector('.signUp').classList.add("show")
                document.querySelector('.signIn').classList.remove("show")
                document.querySelector('.priceFinder').classList.remove('show') 

            }}>Sign Up</button>
            </li>
          </ul>
        </Col>
      </Row>
      <section className="main">
        <div className="row text-center mt-4 d-flex flex-column align-items-center">
          <h1>
            Grow Your Business. <span>We will</span>{" "}
          </h1>
          <h2>
            <span>take care</span> all your logistics
          </h2>
          <div className="col-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit modi magnam sed excepturi explicabo obcaecati
              officiis cum veritatis nisi quae?
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <img
            src={flight}
            alt=""
            className="img-fluid"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="signIn row m-2 p-4 ">
          <Login />
        </div>
        <div className="signUp row m-2 p-4 ">
        <Registration/>
        </div>
        <div className="priceFinder">
          <PriceFinder/>
        </div>
      </section>
      <section className="m-2">
        <Row className="m-0 mt-2">
          <Col className="col-md-4 p-4 d-flex gap-1 flex-column">
            <span>Icon</span>
            <h5>Your intercontinental shipping solution</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              officiis.
            </p>
          </Col>
          <Col className=" col-md-4 p-4 d-flex gap-1 flex-column">
            <span>Icon</span>
            <h5>Your intercontinental shipping solution</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              officiis.
            </p>
          </Col>
          <Col className="col-md-4 p-4 d-flex gap-1 flex-column">
            <span>Icon</span>
            <h5>Your intercontinental shipping solution</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              officiis.
            </p>
          </Col>
        </Row>
      </section>
      <section className="row text-center bg-light p-2">
        <h5>
          <span>Our Services</span>
        </h5>
        <h1>Everything is ready to transport</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          ducimus mollitia voluptates eum tenetur deserunt, cupiditate facilis
          rerum vero repellendus.
        </p>
      </section>
      <Row>
        <section className="footer border-top mt-3">
          <Row className="m-1">
            <div className="col-sm-3  p-2">
              <h5>CARGO</h5>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                aut!
              </p>
              <p className="d-flex align-items-center gap-1">
                <span style={{ fontSize: "30px", marginTop: "5px" }}>
                  {" "}
                  &#169;
                </span>{" "}
                2024 Cargo. All Rights Reserved
              </p>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-3  p-2">
              <h5 className="">Services</h5>
              <br />
              <p>Intercontinental Shipment</p>
              <p>Continental Shipment</p>
              <p>Inland Shipment</p>
              <p>Overseas Shipment</p>
            </div>
            <div className="col-sm-2  p-2">
              <h5>Route</h5>
              <br />
              <p>European Route</p>
              <p>American Route</p>
              <p>Asian Route</p>
              <p>African Route</p>
            </div>
            <div className="col-sm-2  p-2">
              <h5>About</h5>
              <br />
              <p>Insurance</p>
              <p>Resource</p>
              <p>Term & Conditions</p>
            </div>
          </Row>
        </section>
      </Row>
    </Container>
  );
}

export default CustomerHome;
