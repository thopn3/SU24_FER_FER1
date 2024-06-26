import { Col, Container, Row } from 'react-bootstrap';
import './Ex51.css';

export default function Ex51(){
    return (
        <Container>
            <Row style={{backgroundColor: "lightblue"}}>
                <Col>
                    <h1>Let's test the grid!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container fluid style={{width: "80%", margin: "20px auto"}} className='main-content'>
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
            <Row style={{backgroundColor: "gray", textAlign:"center"}}>
                <Col>
                    <h1>Created by ABC</h1>
                </Col>
            </Row>
        </Container>
    );
}