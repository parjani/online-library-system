import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / About */}
        <div className="footer-section">
          <h2>Online Library</h2>

          <p>
            Discover thousands of books from different categories.
            Read, explore, and grow your knowledge.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/books">Browse Books</Link>
          <Link to="/add-book">Add Book</Link>
        </div>

        {/* Categories */}
        {/* Categories */}
<div className="footer-section">

  <h3>Categories</h3>

  <Link to="/books/Fiction">
    Fiction
  </Link>

  <Link to="/books/Non-Fiction">
    Non-Fiction
  </Link>

  <Link to="/books/Sci-Fi">
    Sci-Fi
  </Link>

  <Link to="/books/Fantasy">
    Fantasy
  </Link>

  <Link to="/books/Programming">
    Programming
  </Link>

</div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>library@gmail.com</p>
          <p>+91 9888568555</p>
          <p>Pune, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Online Library System | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;