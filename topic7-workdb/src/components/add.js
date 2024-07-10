import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function AddProduct() {
    const redirect = useNavigate();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState(0);

    useEffect(() => {
        fetch("http://localhost:9999/categories")
            .then(res => res.json())
            .then(result => setCategories(result))
            .catch(err => console.log(err));
    }, []);

    const handleCreate = (e) => {
        e.preventDefault();

        // Validate data
        let flag = true;
        let message = "";
        if (name.length == 0) {
            message += "Name is required\n";
            flag = false;
        }
        if (cat == 0) {
            message += "Category must be choose\n";
            flag = false;
        }
        if (flag == false && message.length > 0) {
            alert(message);
        } else {
            const newProduct = {
                name: name,
                price: price,
                description: desc,
                category: cat
            };

            fetch("http://localhost:9999/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(() => {
                    alert("Add new success!");
                    redirect("/product");
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <Container>
            <Row className="mt-3">
                <Col style={{ textAlign: "center" }}>
                    <h3>Add a new Product Form</h3>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Link to={"/product"}>Back to List</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>ProductId</Form.Label>
                            <Form.Control disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Product name *</Form.Label>
                            <Form.Control onChange={e => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" min={0} max={100000000}
                                onChange={e => setPrice(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                onChange={e => setDesc(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category *</Form.Label>
                            <Form.Select onChange={e => setCat(parseInt(e.target.value))}>
                                <option value="0" key={0}>--- Choose a category ---</option>
                                {
                                    categories?.map(c => (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Brands &nbsp;</Form.Label>
                            <Form.Check inline label="Apple" value={"Apple"} />
                            <Form.Check inline label="Samsung" value={"Samsung"} />
                            <Form.Check inline label="Xiaomi" value={"Xiaomi"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button className="btn btn-success" onClick={e => handleCreate(e)}>
                                Create
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}