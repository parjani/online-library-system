import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {

  const { id } = useParams();

  const books = useSelector(
    (state) => state.books.books
  );

  const book = books.find(
    (book) => book.id == id
  );

  if (!book) {
    return (
      <div className="container">

        <div className="not-found-card">

          <h2>📕 Book Not Found</h2>

          <Link to="/books">
            <button className="details-btn">
              Back to Browse
            </button>
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="container">

      <div className="book-details-wrapper">

        {/* Left Image */}
        <div className="book-details-image">

          <img
            src={book.image}
            alt={book.title}
          />

        </div>

        {/* Right Content */}
        <div className="book-details-content">

          <span className="book-category-badge">
            {book.category}
          </span>

          <h1>{book.title}</h1>

          <h3>
            Author:
            <span> {book.author}</span>
          </h3>

          <p className="book-description">
            {book.description}
          </p>

          <div className="rating-box">
            Rating: {book.rating}
          </div>

          <Link to="/books">
            <button className="details-btn">
              ⬅ Back to Browse
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default BookDetails;