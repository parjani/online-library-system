import { Link } from "react-router-dom";
import booksData from "../data/booksData";

function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Programming"];

  const popularBooks = booksData.filter(
    (book) => book.isPopular === true
  );

  return (
    <div className="container">

      <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
        Welcome to Online Library
      </h1>

      {/* Categories Section */}
      <section className="section-card">

        <h2 className="section-title"  style={{textAlign: "center" }}>
          Our Categories
        </h2>

        <div className="categories">
          {categories.map((cat) => (
            <Link key={cat} to={`/books/${cat}`}>
              <div className="category-card">
                <a>{cat}</a>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* Popular Books */}
      <section className="section-card">

        <h2 className="section-title" style={{textAlign: "center" }}>
          Popular Books
        </h2>

        {/* Use books-grid */}
        <div className="books-grid">

          {popularBooks.map((book) => (
            <div className="book-card" key={book.id}>

              <img
                src={book.image}
                alt={book.title}
                className="book-image"
              />

              <div className="book-content">

                <h3>{book.title}</h3>

                <p>
                  <strong>Author:</strong> {book.author}
                </p>

                <p>
                  <strong>Category:</strong> {book.category}
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
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;