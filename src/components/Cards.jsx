import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Cards() {
  return (
    <Container className="my-4">
      <Row className="g-4">
        
        
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsH7T1E48dAnZPaSk6DCdoJSTW87ehdI4NOkMhi6js46AxHUg-Ip8N3iTGVb6PD0LdsUAUKGjqJmi08y3n7zSjMgH_GArk0-S70Ez8jKxIQsx2ngEqsQ65FJlYAo1afUoZ4noLvS6A3g&usqp=CAc"
            />
            <Card.Body>
              <Card.Title>Camiseta Argentina Titular</Card.Title>
              <Card.Text>Texto de la card</Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>

        
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsH7T1E48dAnZPaSk6DCdoJSTW87ehdI4NOkMhi6js46AxHUg-Ip8N3iTGVb6PD0LdsUAUKGjqJmi08y3n7zSjMgH_GArk0-S70Ez8jKxIQsx2ngEqsQ65FJlYAo1afUoZ4noLvS6A3g&usqp=CAc"
            />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>Texto de la card</Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsH7T1E48dAnZPaSk6DCdoJSTW87ehdI4NOkMhi6js46AxHUg-Ip8N3iTGVb6PD0LdsUAUKGjqJmi08y3n7zSjMgH_GArk0-S70Ez8jKxIQsx2ngEqsQ65FJlYAo1afUoZ4noLvS6A3g&usqp=CAc"
            />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>Texto de la card</Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Cards;
