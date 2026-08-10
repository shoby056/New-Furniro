import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onCartClick }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}

      <div className="logo">

        <img
          src="/assets/icons/Header_Logo.png"
          alt="Furniro Logo"
        />

        <span>
          Furniro
        </span>

      </div>


      {/* Navigation Links */}

      <div
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <Link to="/">
          Home
        </Link>

        <Link to="/shop">
          Shop
        </Link>

        <Link to="/About">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>


      {/* Navbar Icons */}

      <div className="nav-icons">

        <span>
          ♙
        </span>

        <span>
          ⌕
        </span>

        <span>
          ♡
        </span>


        {/* CART */}

       <Link
  to="/cart"
  className="cart-icon"
  onClick={onCartClick}
>
  🛒
</Link>

      </div>


      {/* Mobile Menu */}

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;