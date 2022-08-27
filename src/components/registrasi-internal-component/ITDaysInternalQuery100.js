import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ITDaysInternalQuery100 } from "../../Data";
import "../registrasi-eksternal-component/test.css";

function Pendaftaran() {
  return (
    <main>
      {ITDaysInternalQuery100.map((item) => (
        <section className={`ITDaysRegistrasi ${item.title}`} key={item.id}>
          <Container>
            <Row>
              <Col md={7} className="SK">
                <div className="box box-sk ">
                  <h1 className="title g-4 pb-4">{`Syarat dan Ketentuan ${item.title}`}</h1>
                  <ul>
                    {item.syarat.map((syarat, index) => (
                      <li className="description" key={index}>
                        {syarat}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col md={{ span: 4, offset: 1 }}>
                <Row className="box pendaftaran flex-column g-4">
                  <Col className="text-center title">{item.title}</Col>
                  <Col className="text-center title">
                    <img src={item.img} className="img img-item img-fluid" alt={item.title} />
                  </Col>
                  <Col className="countdown-timer text-center text-light py-5">Countdown-Timer</Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <div className="button-daftar">
                      <a href={item.path} target="_blank" rel="noopener noreferrer" className="btn-daftar">
                        Daftar
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      ))}
    </main>
  );
}

export default Pendaftaran;
