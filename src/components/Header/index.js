// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo-img"
      />
      <ul className="nav-items">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
      <button className="logout-website-btn" type="button">
        Logout
      </button>
      <button className="logout-mobile-btn" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-icon"
        />
      </button>
    </div>
    <div className="nav-icons-container">
      <button className="mobile-icon-btn" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav logout"
          className="nav-icon"
        />
      </button>
      <button className="mobile-icon-btn" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav logout"
          className="nav-icon"
        />
      </button>
      <button className="mobile-icon-btn" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav logout"
          className="nav-icon"
        />
      </button>
    </div>
  </nav>
)

export default Header
