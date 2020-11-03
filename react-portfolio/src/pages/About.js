import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <header>
                <h1 class = "heading">About Me</h1>
            </header>
            <Container style={{ marginTop: 30 }}>
            <Row>
            <Col size="md-12">
            <p>
                Born in Florida before moving to NH at age 10. I originally went to college for Electrical Engineering before giving it up for business but ended up regretting it and am now becoming a coder.
            </p>
            </Col>
            <Col size="md-12">
            <img src="../T014DSLRTAR-U014LHDDZB7-073cbb3ff7b9-512.jpg" alt="image" class="img-thumbnail"></img>
            </Col>
            <Col size="md-12">
            <h5 class="card-title">Fun facts</h5>
            <ul class="card-text">
                <li>Is an Eagle Scout</li>
                <li>Liked the Devil Rays as a Kid</li>
            </ul>
            </Col>
            </Row>
            </Container>
        </div>
    )
}
export default About;