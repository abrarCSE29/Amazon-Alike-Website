import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

export default function PreviousOrders() {

    const {user} = useContext(UserContext);
    console.log(user.orders[0]);
  return (
    <div>PreviousOrders</div>
  )
}
