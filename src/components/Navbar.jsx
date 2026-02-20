import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink className="nav-link" to="/">
              {/* <i ref="/Users/brayanrodrigogenovese/Desktop/react-router/src/assets/img/react.svg"></i> */}
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/AboutPage">
              Chi Siamo
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Products">
              Prodotti
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
