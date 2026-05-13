import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <h2>Online Library</h2>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/books">
          Browse Books
        </Link>

        <Link to="/add-book">
          Add Book
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;