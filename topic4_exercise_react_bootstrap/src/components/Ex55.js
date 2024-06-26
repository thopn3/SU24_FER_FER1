import { Col, Container, Navbar, Nav, 
    NavDropdown, Row, Form, Button, Image,
    Breadcrumb
} from 'react-bootstrap';


export default function Ex55() {
    return (
        <Container>
            <Row>
                <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container fluid>
                            <Navbar.Brand href="#" style={{ width: "150px" }}>
                                <Image src='./logo.png' width="100%" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1"><i class="bi bi-house-door"></i> Trang chủ</Nav.Link>
                                    <Nav.Link href="#action2"><i class="bi bi-info-square-fill"></i> Ngành học</Nav.Link>
                                    <Nav.Link href="#action3"><i class="bi bi-person-vcard"></i> Tuyển sinh</Nav.Link>
                                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#" disabled>
                                        Link
                                    </Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            <Row style={{ backgroundColor: "orange", padding: "5%" }}>
                <Col>
                    <Image src='./banner.png' width="100%" height="400px" />
                </Col>
            </Row>
            <Row style={{margin:"10px auto"}}>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">
                           Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Students</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row></Row>
            <Row></Row>
        </Container>
    );
}