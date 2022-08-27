import React, { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ITDaysEksternalMobileLegend } from "../../Data";
import "./test.css";

function Pendaftaran() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Sep 19, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days < 10 ? "0" + days : days);
        setTimerHours(hours < 10 ? "0" + hours : hours);
        setTimerMinutes(minutes < 10 ? "0" + minutes : minutes);
        setTimerSeconds(seconds < 10 ? "0" + seconds : seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <main>
      {ITDaysEksternalMobileLegend.map((item) => (
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
                <Row className="box pendaftaran flex-column g-4 justify-content-center align-items-center">
                  <Col className="text-center title">{item.title}</Col>
                  <Col className="text-center title">
                    <img src={item.img} className="img img-item img-fluid" alt={item.title} />
                  </Col>
                  <Col className="countdown-timer text-light d-flex justify-content-center" md={10}>
                    <div>
                      <p className="number">{timerDays}</p>
                      <p>
                        <small>Days</small>
                      </p>
                    </div>
                    <div>
                      <p className="number">{timerHours}</p>
                      <p>
                        <small>Hours</small>
                      </p>
                    </div>
                    <div>
                      <p className="number">{timerMinutes}</p>
                      <p>
                        <small>Minutes</small>
                      </p>
                    </div>
                    <div>
                      <p className="number">{timerSeconds}</p>
                      <p>
                        <small>Seconds</small>
                      </p>
                    </div>
                  </Col>
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
                      {item.peraturan.map((peraturan, index) => (
                        <div className={`box-peraturan ${(index + 1) % 2 === 0 ? "flex-row-reverse" : ""}`} key={index}>
                          <div className="description">{peraturan}</div>
                          <span className="number align-items-center">{index + 1}</span>
                        </div>
                      ))}
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

export default Pendaftaran;
