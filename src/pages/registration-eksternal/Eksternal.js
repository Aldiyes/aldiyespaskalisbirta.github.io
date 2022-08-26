import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Competition } from "../../Data";
import Container from "react-bootstrap/Container";

function Eksternal() {
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

export default Eksternal;
