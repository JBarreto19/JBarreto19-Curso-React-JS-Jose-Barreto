import { Link } from "react-router-dom";

export const Categorias = () => {
    return (
    <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/category/PastGigs"}>Past Gigs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/category/FutureEvents"}>Future Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/category/TopRequested"}>Top Requests</Link>
        </li>
      </ul>
)
    }