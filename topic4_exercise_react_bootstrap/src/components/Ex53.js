import { Col, Container, Row, Nav } from 'react-bootstrap';
import './Ex51.css';

export default function Ex53() {
    return (
        <Container>
            <Row style={{ backgroundColor: "lightblue" }}>
                <Col>
                    <h1>Let's test the grid!</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Container fluid style={{ width: "80%", margin: "20px auto" }} className='main-content'>
                        <Row>
                            <Col>First col</Col>
                            <Col>Last col</Col>
                        </Row>
                        <Row>
                            <Col>Col</Col>
                            <Col>Col</Col>
                            <Col>Col</Col>
                        </Row>
                        <Row>
                            <Col>Col</Col>
                            <Col>Col</Col>
                            <Col>Col</Col>
                            <Col>Col</Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row style={{ backgroundColor: "gray", textAlign: "center" }}>
                <Col>
                    <h1>Created by ABC</h1>
                </Col>
            </Row>
        </Container>
    );
}