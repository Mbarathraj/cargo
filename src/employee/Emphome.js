import {React,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Emphome.css';





const Custhome = () => {
    const [sb, setsb] = useState(false);
    return (
        <Container fluid="md" className="container1">
            <Row className="rows1">
                <Row className="subrow1">
                    <h4>Cargo</h4>
                </Row>
                <Row className="subrow2">
                    <Button className="signoutbtn">Sign-out</Button>
                </Row>
            </Row>
            <Button className="sbbtn" onClick={() => setsb(true)}></Button>
            <Col className="sidebar">
                <Row className="todays-product"></Row>
                <Row className="pending"></Row>
            </Col>
        </Container>
    )
}

export default Custhome