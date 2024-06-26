import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function Detail(){
    const {pId} = useParams();
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:9999/products/${pId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));

        fetch("http://localhost:9999/categories")
            .then(res => res.json())
            .then(result => setCategories(result))
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <Link to={"/product"} className="btn btn-success">Go to Shop</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Product detail</h3>
                    <div>Product Id: {product?.id}</div>
                    <div>Name: {product?.name}</div>
                    <div>Price: {product?.price}</div>
                    <div>Description: {product?.description}</div>
                    <div>Brands: 
                        {
                            product?.brands?.map(b => {
                                return <span key={b.id}>{b.name}<br/></span>
                            })
                        }
                    </div>
                    <div>Category: {categories?.find(c => c.id == product.category)?.name}</div>
                </Col>
            </Row>
        </Container>
    )
}