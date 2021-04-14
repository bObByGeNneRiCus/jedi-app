import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import logo from "../../logo.svg";

const Parceiro = function () {
  return (
    <div className="master d-flex align-items-center justify-content-center">
      <Container className="mw-100 d-flex align-items-center justify-content-center">
        <Row align="center">
          <Col className="mt-3 mb-3">
            <Card style={{ width: "25rem" }} bg="dark" text="white" align="center">
              <Card.Title>Jedi</Card.Title>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Text>
                  <p>500 kg de alimentos doados</p>
                  <p>40 famílias atendidas</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "25rem" }} bg="dark" text="white" align="center">
              <Card.Title>Jedi</Card.Title>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Text>
                  <p>500 kg de alimentos doados</p>
                  <p>40 famílias atendidas</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "25rem" }} bg="dark" text="white" align="center">
              <Card.Title>Jedi</Card.Title>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Text>
                  <p>500 kg de alimentos doados</p>
                  <p>40 famílias atendidas</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "25rem" }} bg="dark" text="white" align="center">
              <Card.Title>Jedi</Card.Title>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Text>
                  <p>500 kg de alimentos doados</p>
                  <p>40 famílias atendidas</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Parceiro;
