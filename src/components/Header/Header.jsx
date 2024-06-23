import React, { useContext } from 'react';
import logo from "../../images/logo.png";
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function Header() {

  const { user } = useContext(UserContext);
  console.log(user.email);

  return (
    <div className='header'>
      <img src={logo} alt="" />
      <nav>
        <Link to="shop">Products</Link>
        <Link to="review">Review Order</Link>
        <Link to="manage">Manage Order</Link>
        <Link to="signin">Signin</Link>
        {user && <div className="user-welcome" style={{color : 'white'}}>Welcome, {user.email}</div>}
      </nav>
    </div>
  )
}
