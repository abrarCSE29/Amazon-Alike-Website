import React from 'react';
import logo from "../../images/logo.png";
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Review</a>
        <a href="/manage">Manage Review  </a>
      </nav>
    </div>
  )
}
