import React from 'react';
import logo from "../../images/logo.png";
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {



  return (
    <div className='header'>
      <img src={logo} alt="" />
      <nav>
        <Link to="shop">Products</Link>
        <Link to="review">Review Order</Link>
        <Link to="manage">Manage Order</Link>
      </nav>
    </div>
  )
}
