import { NavLink } from "react-router-dom";
export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Welcome</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}
