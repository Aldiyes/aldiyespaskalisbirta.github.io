import React from "react";
import Card from "react-bootstrap/Card";
import { Competition } from "../../Data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./registration.css";
function Registration() {
  return (
    <section className="registration" id="registration">
      <div className="container container-md">
        <Row xs={1} md={3} className="g-5">
          {Competition.map((item) => (
            <Col>
              <Card key={item.id} className="card">
                <Card.Img variant="top" src={item.img} />
                <Card.Body className="card-body">
                  <Card.Title className="ps-2">{item.title}</Card.Title>
                  <a href={item.path} target="_blank" rel="noreferrer" aria-describedby="profile-it-days-usd-2022 " className={`card card-${item.title}`}>
                    Daftar
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Registration;
