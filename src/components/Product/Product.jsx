import React from 'react';
import './Product.css';
import { FaCartPlus } from "react-icons/fa6";
import { Card, Button } from 'react-bootstrap';

export default function Product(props) {
    const { img, name, seller, price, stock } = props.product;

    return (
        <Card className='product mb-4'>
            <Card.Img variant="top" src={img} alt="productPicture"  />
            <Card.Body>
                <Card.Title className='product-name'>{name}</Card.Title>
                <Card.Text>
                    <small className='text-muted'>by: {seller}</small>
                </Card.Text>
                <Card.Text>
                    <h4>Price: ${price}</h4>
                </Card.Text>
                <Card.Text>
                    <p>Stock: Only {stock} items left</p>
                </Card.Text>
                <Button
                    variant='primary'
                    onClick={() => props.handleAddProduct(props.product)}
                >
                    <FaCartPlus /> Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
}
