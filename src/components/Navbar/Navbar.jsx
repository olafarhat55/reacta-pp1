import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold fs-3" to="/">
          START FRAMEWORK
        </Link>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold" to="/portfolio">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
