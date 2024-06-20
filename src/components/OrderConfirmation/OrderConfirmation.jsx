import React from 'react'
import { useParams } from 'react-router-dom'

export default function OrderConfirmation() {

    const {name} = useParams();
  return (
    <div style={{textAlign : 'center'}}><h1>Dear {name} Your order has been confirmed</h1></div>
  )
}
