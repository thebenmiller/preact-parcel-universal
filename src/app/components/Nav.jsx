import { h } from 'preact';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/test">Test</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
