import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";

function Header() {
  const { pathname } = useLocation()
  return (
    <div className="header">
    <Link to="/" className={"header__item " + (pathname==="/" ? "active" : "")}>Home</Link>
    <Link to="/favorites" className={"header__item " + (pathname==="/favorites" ? "active" : "")}>Favorites</Link>
  </div>
  )
}

export default Header;
