import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/Custhome.css';


 const Custhome = () => {
    return(
        <Container fluid="md" className="container">
            <Row className="rows">
                <Row className="subrow1">

                </Row>
                <Row className="subrow2">
                    <Row className="sign-out">
                        <Button className="signoutbtn">Sign-out</Button>
                    </Row>
                </Row>
            </Row>
        </Container>
    )
}

export default Custhome