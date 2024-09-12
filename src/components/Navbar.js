import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Amazon
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>
      <div className="nav-links">
        <Link to="/signin">Sign In</Link>
        <Link to="/cart">
          <FaCartPlus /> Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
