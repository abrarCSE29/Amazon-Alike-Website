import React, { useContext } from 'react';
import logo from "../../images/logo.png";
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function Header() {

  const { user, setUser } = useContext(UserContext);
  //console.log(user.email);

  const handleLogout = () => {
    setUser(null); // Clear user context on logout
  };

  return (
    <div className='header'>
      <img src={logo} alt="" />
      <nav>
        <Link to="shop">Products</Link>
        <Link to="review">Review Order</Link>
        <Link to="manage">Manage Order</Link>
        {!user ? (
          <Link to="signin">Signin</Link>
        ) : (
          <>
            <span className="user-welcome" style={{color : 'white'}}>Welcome, {user.username}</span>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        )}
      </nav>
    </div>
  )
}
