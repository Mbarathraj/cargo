import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import '../css/Custhome.css';


 const Custhome = () => {
    return(
        <Container fluid="md" className="container">
            <Row className="rows">
                <Row className="subrow1">
                    <h4>Cargo</h4>
                </Row>
                <Row className="subrow2">
                
                        <Button className="signoutbtn">Sign-out</Button>
                    
                </Row>
            </Row>
        </Container>
    )
}

export default Custhome