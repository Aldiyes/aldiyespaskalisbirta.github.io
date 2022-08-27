// import React, { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ITDaysEksternalValorant } from "../../Data";

import "./test.css";

function Pendaftaran() {
  // const [timerDays, setTimerDays] = useState("00");
  // const [timerHours, setTimerHours] = useState("00");
  // const [timerMinutes, setTimerMinutes] = useState("00");
  // const [timerSeconds, setTimerSeconds] = useState("00");

  // let interval = useRef();

  // const startTimer = () => {
  //   const countdownDate = new Date("Sep 19, 2022 00:00:00").getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countdownDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     if (distance < 0) {
  //       clearInterval(interval.current);
  //     } else {
  //       setTimerDays(days < 10 ? "0" + days : days);
  //       setTimerHours(hours < 10 ? "0" + hours : hours);
  //       setTimerMinutes(minutes < 10 ? "0" + minutes : minutes);
  //       setTimerSeconds(seconds < 10 ? "0" + seconds : seconds);
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   startTimer();
  // });
  return (
    <main>
      {ITDaysEksternalValorant.map((item) => (
        <section className={`ITDaysRegistrasi ${item.title}`} key={item.id}>
          <Container>
            <Row className="g-5 d-flex">
              <Col className="left-side">
                <Row md={7} className="SK">
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
                </Row>
                <Row md={7} className="sistem-pertandingan">
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
              <Col className="right-side">
                <Row className="peraturan">
                  <div className="box box-sk ">
                    <h1 className="title">Peraturan</h1>
                    <ul className="p-5 g-2 justify-content-center align-items-center">
                      {item.peraturan.map((peraturan, index) => (
                        <li className={`d-flex ${index % 2 === 0 ? "flex-row-reverse" : ""}`} key={index}>
                          <div className="description w-100">{peraturan}</div>
                          <span className="number align-items-center p-2">{index + 1}</span>
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
