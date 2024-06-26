import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Ex52(){
    return (
        <Container>
            <Row style={{backgroundColor: "lightblue"}}>
                <Col>
                    <h1 style={{lineHeight: "150px", textAlign:"center"}}>My First React-Bootstrap Page</h1>
                </Col>
            </Row>
            <Row style={{padding: "10px 30px", textAlign:"center"}}>
                <Col>
                    <Image src='./images/logo192.png' fluid style={{width: "80%"}}/>
                </Col>
                <Col>
                    <Image src='./images/logo192.png' fluid style={{width: "80%"}}/>
                </Col>
                <Col>
                    <Image src='./images/logo192.png' fluid style={{width: "80%"}}/>
                </Col>
            </Row>
        </Container>
    );
}