import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ITDaysEksternalValorant } from "../../Data";
import CountDownTimer from "../../components/CountDownTimer";
import "./test.css";

function Pendaftaran() {
  return (
    <main>
      {ITDaysEksternalValorant.map((item) => (
        <section className={`ITDaysRegistrasi ${item.title}`} key={item.id}>
          <Container>
            <Row className="g-5 d-flex">
              <Col className="left-side">
                <Row className="link-pendaftaran">
                  <div className="box box-link-pendaftaran d-flex flex-column justify-content-center align-items-center p-4">
                    <h1 className="title pt-4">{item.title}</h1>
                    <div className="image">
                      <img src={item.img} className="img img-item img-fluid" alt={item.title} />
                    </div>
                    <div className="countdown-timer text-light d-flex justify-content-center">
                      <CountDownTimer time="Sep 19, 2022 00:00:00" />
                    </div>
                    <div className="button-daftar mt-5 mb-5">
                      <a href={item.path} target="_blank" rel="noopener noreferrer" className="btn-daftar">
                        Daftar
                      </a>
                    </div>
                  </div>
                </Row>
                <Row md={7} className="SK">
                  <div className="box box-SK ">
                    <h1 className="title g-4 pb-4">{`Syarat dan Ketentuan ${item.title}`}</h1>
                    <ul>
                      {item.syarat.map((syarat, index) => (
                        <li className="description" key={index}>
                          {syarat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Row>
              </Col>
              <Col className="right-side">
                <Row className="peraturan">
                  <div className="box box-sk ">
                    <h1 className="title pt-4">Peraturan</h1>
                    <ul className="g-2 justify-content-center align-items-center">
                      {item.peraturan.map((peraturan, index) => (
                        <li className={`d-flex ${index % 2 === 0 ? "flex-row-reverse" : ""}`} key={index}>
                          <div className="description w-100">{peraturan}</div>
                          <span className="number align-items-center p-2">{index + 1}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Row>
                <Row md={7} className="sistem-pertandingan pt-5">
                  <div className="box box-sistem-pertandingan">
                    <h1 className="title g-4 pb-4">Sistem Pertandingan</h1>
                    <ul>
                      {item.sistemPertandingan.map((sp, index) => (
                        <li className="description" key={index}>
                          {sp}
                        </li>
                      ))}
                    </ul>
                  </div>
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
