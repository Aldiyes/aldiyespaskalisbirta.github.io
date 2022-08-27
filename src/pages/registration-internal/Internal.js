import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CompetitionInternal } from "../../Data";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Internal() {
  return (
    <main>
      <section className="internal-registration">
        <Container>
          <h1 className="title pb-5">Internal</h1>
          <Row xs={1} md={3} className="g-5 justify-content-center">
            {CompetitionInternal.map((item) => (
              <Col key={item.id}>
                <Card>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title className="text-center">{item.title}</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <Link to={item.path}>{`Go somewhere ${item.title}`}</Link>
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
