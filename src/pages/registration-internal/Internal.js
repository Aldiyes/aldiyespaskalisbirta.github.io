import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Competition } from "../../Data";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Test from "../../components/registrasi-internal-component/Test";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Internal() {
  return (
    <main>
      <section className="internal-registration">
        <Container>
          <Row xs={1} md={3} className="g-4">
            {Competition.map((item) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title className="text-center">{item.title}</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <Link to={item.path}>`Go somewhere ${item.title}`</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Internal;
