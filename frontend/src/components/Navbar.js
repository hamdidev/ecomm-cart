import {Link} from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return(
    <nav className="navbar">
        {/* logo */}
        <div className="navbar__logo">
            <h2>MERN Shpping Cart</h2>
        </div>
        {/* links */}
        <ul className="navbar__lists">
            <li className="navbar__link">
                <Link to="/cart">
                  {/* icon */}
                  Cart
                  <span className="cartlogo__badge">0</span>
                </Link>
            </li>

            <li className="navbar__link">
                <Link to="/">
                  Shop
                </Link>
            </li>
                  

        </ul>
        {/* hamburger menu */}
        <div>
          <dev></dev>
          <dev></dev>
          <dev></dev>
        </div>
    </nav>
  )
}

export default Navbar;
