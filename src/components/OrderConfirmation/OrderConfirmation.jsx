import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { removeCart } from '../../Database/database';

export default function OrderConfirmation() {

    const { name } = useParams();
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Dear {name} Your order has been confirmed</h1>
            <Link to={`/shop`}>
                <button
                    style={{
                        padding: '10px',
                        margin: '10px',
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '10px',
                        fontSize: 'large',
                    }}
                    onClick={removeCart}
                >Go back to products page</button>
            </Link>
        </div>
    )
}
