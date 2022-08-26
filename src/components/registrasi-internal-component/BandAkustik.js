import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ITDaysBandAkustik } from "../../Data";
import "./test.css";
function BandAkustik() {
  return (
    <main>
      {ITDaysBandAkustik.map((item) => (
        <section className={`ITDaysRegistrasi ${item.title}`}>
          <Container>
            <Row>
              <Col md={7} className="SK">
                <div className="box box-sk ">
                  <h1 className="title">Syarat dan Ketentuan Band Accoustic</h1>
                  <ul>
                    <li className="description">{item.syarat1}</li>
                    <li className="description">{item.syarat2}</li>
                    <li className="description">{item.syarat3}</li>
                    <li className="description">{item.syarat4}</li>
                    <li className="description">{item.syarat5}</li>
                    <li className="description">{item.syarat6}</li>
                    <li className="description">{item.syarat7}</li>
                    <li className="description">{item.syarat8}</li>
                    <li className="description">{item.syarat9}</li>
                    <li className="description">{item.syarat10}</li>
                  </ul>
                </div>
              </Col>
              <Col md={{ span: 4, offset: 1 }}>
                <Row className="box pendaftaran flex-column">
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
                <Row className="box mt-5">
                  <Col className="peraturan">
                    <h1 className="title">Peraturan</h1>
                    <Col>
                      <div className="box-peraturan ">
                        <div className="description">{item.peraturan1}</div>
                        <span className="number align-items-center">1</span>
                      </div>
                      <div className="box-peraturan ">
                        <span className="number align-items-center">2</span>
                        <div className="description">{item.peraturan2}</div>
                      </div>
                      <div className="box-peraturan ">
                        <div className="description">{item.peraturan3}</div>
                        <span className="number align-items-center">3</span>
                      </div>
                      <div className="box-peraturan ">
                        <span className="number align-items-center">4</span>
                        <div className="description">{item.peraturan4}</div>
                      </div>
                    </Col>
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

export default BandAkustik;
