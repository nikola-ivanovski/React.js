import { Link } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/people">
            <li>People</li>
          </Link>
          <Link to="/planets">
            <li>Planets</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
