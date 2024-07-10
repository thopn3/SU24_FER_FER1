import { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [catId, setCatId] = useState("all");
    const [search, setSearch] = useState("");
    const arrBrand = [];
    let brands = new Set();

    useEffect(() => {
        // Action: GET - http://localhost:9999/products
        fetch("http://localhost:9999/products")
            .then(res => res.json())
            .then(result => {
                if(catId != "all"){
                    if(search.length > 0){
                        setProducts(result?.filter(p => p.category == catId && p.name.toLowerCase().includes(search.toLowerCase())))
                    }else{
                        setProducts(result?.filter(p => p.category == catId));
                    }
                }else{
                    setProducts(result?.filter(p => p.name.toLowerCase().includes(search.toLowerCase())))
                }

                // Duyet tung phan tu trong 'result' lay ra brands
                products?.forEach(p => {
                    const pBrands = p.brands;
                    for(let b of pBrands){
                        brands.add(b);
                    }
                })
                brands.forEach(b=> arrBrand.push(b));
            })
            .catch(err => console.log(err));

        fetch("http://localhost:9999/categories")
            .then(res => res.json())
            .then(result => setCategories(result))
            .catch(err => console.log(err));

    }, [catId, search]);

    function handleDelete(pid){
        if(window.confirm("Do you want to delete?")){
            fetch(`http://localhost:9999/products/${pid}`, {method: "DELETE"})
                .then(res => res.json())
                .then((result) => {
                    alert("Delete success. Product: " + result.name);
                    window.location.reload();
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <Container>
                        <Row className='mb-2'><Col><h3>Filter by:</h3></Col></Row>
                        <Row><Col><h5>Cagtegory</h5></Col></Row>
                        <Row>
                            <Col>
                                <Form.Select onChange={e => setCatId(e.target.value)}>
                                    <option value="all" key={0}>-- All --</option>
                                    {
                                        categories?.map(c => (
                                            <option value={c.id} key={c.id}>{c.name}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row><Col><h5>Price</h5></Col></Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Range min={0} max={100000000}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row><Col><h5>Brands</h5></Col></Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    {
                                        // brands?.map(b => (
                                        //     <Form.Check value={b} label={b}/>
                                        // ))
                                    }
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col md={9}>
                    <Container>
                        <Row>
                            <Col style={{ textAlign: "center" }}><h3>List of products</h3></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className='mb-3'>
                                    <Form.Control 
                                        placeholder='Enter product name to search ...'
                                        onChange={e => setSearch(e.target.value)}
                                        />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{textAlign:"right"}} className='mb-3'>
                                <Link to={"/product/add"}>Add a new Product</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table hover bordered striped>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Brands</th>
                                            <th>Category</th>
                                            <th colSpan={2}>Function</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products?.map(p => (
                                                <tr key={p.id}>
                                                    <td>{p.id}</td>
                                                    <td>
                                                        <Link to={`/product/${p.id}`}>
                                                            {p.name}
                                                        </Link>
                                                    </td>
                                                    <td>{p.price}</td>
                                                    <td>{p.description}</td>
                                                    <td>
                                                        {
                                                            p.brands?.map(b => {
                                                                return <span>{b.name}<br /></span>
                                                            })
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            categories?.find(c => c.id === p.category)?.name
                                                        }
                                                    </td>
                                                    <td>
                                                        <Link to={`/product/edit/${p.id}`}>Edit</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={"/product"} onClick={()=>handleDelete(p.id)}>Delete</Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}