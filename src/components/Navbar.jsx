import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/AboutPage">Chi Siamo</NavLink>
          </li>
          <li>
            <NavLink to="/ProducPage">Prodotti</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
