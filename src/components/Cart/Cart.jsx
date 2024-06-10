import React from 'react';
import './Cart.css';
import { Card, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

export default function Cart({ cart }) {
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let shippingCost = 0;
    if (totalPrice > 35) {
        shippingCost = 0; // Free shipping
    } else if (totalPrice > 15) {
        shippingCost = 5;
    } else if (totalPrice > 0) {
        shippingCost = 13;
    }

    const vat = (totalPrice * 0.15).toFixed(2);
    const grandTotal = (totalPrice + parseFloat(vat) + shippingCost).toFixed(2);

    return (
        <Card className='mb-4'>
            <Card.Body>
                <Card.Title className='text-center'>Order Summary</Card.Title>
                <Card.Text className='text-center'>
                    <Badge pill bg="secondary">Items Ordered: {cart.length}</Badge>
                </Card.Text>
                <ListGroup className='mb-3'>
                    {cart.map((product, index) => (
                        <ListGroupItem key={index}>
                            <div className='d-flex justify-content-between'>
                                <span>{product.name}</span>
                                <span>${product.price.toFixed(2)}</span>
                            </div>
                        </ListGroupItem>
                    ))}
                </ListGroup>
                {cart.length > 0 && (
                    <>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <span>Shipping Cost:</span>
                            <span>${shippingCost.toFixed(2)}</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span>VAT & Tax:</span>
                            <span>${vat}</span>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <strong>Grand Total:</strong>
                            <strong>${grandTotal}</strong>
                        </div>
                    </>
                )}
            </Card.Body>
        </Card>
    );
}
