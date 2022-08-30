import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ITDaysInternalFutsal } from "../../Data";
import CountDownTimer from "../CountDownTimer";
import "../registrasi-eksternal-component/test.css";

function Pendaftaran() {
  return (
    <main>
      {ITDaysInternalFutsal.map((item) => (
        <section className={`ITDaysRegistrasi ${item.title}`} key={item.id}>
          <Container>
            <Row className="g-5 d-flex flex-column flex-md-row">
              <Col className="left-side">
                <Row className="container-left-side">
                  <Col className="link-pendaftaran">
                    <div className="box box-link-pendaftaran d-flex flex-column justify-content-center align-items-center">
                      <h1 className="title pt-4">{item.title}</h1>
                      <div className="image">
                        <img src={item.img} className="img img-item img-fluid w-100 h-100" alt={item.title} />
                      </div>
                      <div className="countdown-timer text-light d-flex justify-content-center">
                        <CountDownTimer time="Sep 19, 2022 22:23:00" />
                      </div>
                      <div className="button-daftar mt-5 mb-5">
                        <a href={item.path} target="_blank" rel="noopener noreferrer" className="btn-daftar">
                          Daftar
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col className="SK mb-5 mb-md-0 mt-md-5">
                    <div className="box box-SK g-5">
                      <h1 className="title pb-4">{`Syarat dan Ketentuan ${item.title}`}</h1>
                      <ul>
                        {item.syarat.map((syarat, index) => (
                          <li className="description" key={index + 1}>
                            {syarat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="right-side">
                <Row className="container-right-side">
                  <Col className="peraturan">
                    <div className="box box-sk ">
                      <h1 className="title pt-4">Peraturan</h1>
                      <ul className="g-2 justify-content-center align-items-center">
                        {item.peraturan.map((peraturan, index) => (
                          <li className={`d-flex ${index % 2 === 0 ? "flex-row-reverse" : ""}`} key={index + 2}>
                            <div className="description w-100">{peraturan}</div>
                            <span className="number align-items-center p-2">{index + 1}</span>
                          </li>
                        ))}
                      </ul>
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
