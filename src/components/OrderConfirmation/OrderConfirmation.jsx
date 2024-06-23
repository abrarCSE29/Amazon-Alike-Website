import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { removeCart } from '../../Database/database';
import { UserContext } from '../Context/UserContext';

export default function OrderConfirmation() {
    const {user} = useContext(UserContext);
    //const { name } = useParams();
    const name = user.email;
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
