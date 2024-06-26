import { Row, Col, Container, Card, Button } from "react-bootstrap";

// Tao mot component dat ten Main (trung ten voi ten module Main.js)
export default function Main() {
    return (
        <Row>
            <Col md={3} sm={4} className="d-none d-sm-block">Left</Col>
            <Col md={9} sm={8}>
                <Container fluid>
                    <Row>
                        <Col md={4} sm={6}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="1.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="1.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="1.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="1.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}