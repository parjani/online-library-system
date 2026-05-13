import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function BrowseBooks() {

  const { category } = useParams();

  const books = useSelector((state) => state.books.books);

  const [selectedCategory, setSelectedCategory] = useState(
  category || ""
);
  const [search, setSearch] = useState("");

  /* =========================
     FILTER LOGIC
  ========================= */

  let filteredBooks = books;

// Active category
const activeCategory =
  selectedCategory || category;

// Category filter
if (activeCategory) {
  filteredBooks = filteredBooks.filter(
    (book) => book.category === activeCategory
  );
}

// Search filter
filteredBooks = filteredBooks.filter(
  (book) =>
    book.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    book.author
      .toLowerCase()
      .includes(search.toLowerCase())
);

  return (
    <div className="container">

      {/* Header */}
      <div className="browse-header">

        {/* Left Filter */}
        <div className="filter-section">

          <select
            className="filter-dropdown"
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
          >
            <option value="">
              All Categories
            </option>

            <option value="Fiction">
              Fiction
            </option>

            <option value="Non-Fiction">
              Non-Fiction
            </option>

            <option value="Sci-Fi">
              Sci-Fi
            </option>

            <option value="Fantasy">
              Fantasy
            </option>

            <option value="Programming">
              Programming
            </option>

          </select>

        </div>

        {/* Center Heading */}
        <div className="heading-section">

          <h1>
            {category
              ? `${category} Books`
              : "Browse Books"}
          </h1>

        </div>

        {/* Right Search */}
        <div className="search-section">

          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="search-input"
          />

        </div>

      </div>

      {/* Books Grid */}
      <div className="books-grid">

        {filteredBooks.length > 0 ? (

          filteredBooks.map((book) => (

            <div
              className="book-card"
              key={book.id}
            >

              <img
                src={book.image}
                alt={book.title}
                className="book-image"
              />

              <div className="book-content">

                <h3>{book.title}</h3>

                <p>
                  <strong>Author:</strong>{" "}
                  {book.author}
                </p>

                <p>
                  <strong>Category:</strong>{" "}
                  {book.category}
                </p>

                <p className="book-rating">
                  ⭐ {book.rating}
                </p>

                <Link to={`/book/${book.id}`}>
                  <button className="details-btn">
                    View Details
                  </button>
                </Link>

              </div>

            </div>

          ))

        ) : (

          <h2 className="no-books">
            No books found
          </h2>

        )}

      </div>

    </div>
  );
}

export default BrowseBooks;