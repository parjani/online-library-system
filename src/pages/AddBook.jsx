import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  /* =========================
     Handle Input Change
  ========================= */

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }

  /* =========================
     Validation
  ========================= */

  function validate() {

    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Book title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author name is required";
    }

    if (!formData.category) {
      newErrors.category = "Please select category";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.rating) {
      newErrors.rating = "Rating is required";
    }

    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  /* =========================
     Submit Form
  ========================= */

  function handleSubmit(e) {

    e.preventDefault();

    if (!validate()) return;

    dispatch(
      addBook({
        id: Date.now(),
        isPopular: false,
        ...formData,
      })
    );

    navigate("/books");
  }

  return (
    <div className="container">

      <div className="add-book-wrapper">

        {/* Left Side */}
        <div className="add-book-left">

          <h1>Add New Book </h1>

          <p>
            Expand your online library by adding
            new books with category, rating,
            description, and cover image.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            alt="Books"
          />

        </div>

        {/* Right Side Form */}
        <div className="add-book-right">

          <form onSubmit={handleSubmit}>

            {/* Title */}
            <div className="form-group">

              <label>Book Title</label>

              <input
                type="text"
                name="title"
                placeholder="Enter book title"
                value={formData.title}
                onChange={handleChange}
              />

              <span className="error">
                {errors.title}
              </span>

            </div>

            {/* Author */}
            <div className="form-group">

              <label>Author Name</label>

              <input
                type="text"
                name="author"
                placeholder="Enter author name"
                value={formData.author}
                onChange={handleChange}
              />

              <span className="error">
                {errors.author}
              </span>

            </div>

            {/* Category */}
            <div className="form-group">

              <label>Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">
                  Select Category
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

              <span className="error">
                {errors.category}
              </span>

            </div>

            {/* Rating */}
            <div className="form-group">

              <label>Rating</label>

              <input
                type="number"
                step="0.1"
                name="rating"
                placeholder="Enter rating"
                value={formData.rating}
                onChange={handleChange}
              />

              <span className="error">
                {errors.rating}
              </span>

            </div>

            {/* Image */}
            <div className="form-group">

              <label>Book Image URL</label>

              <input
                type="text"
                name="image"
                placeholder="Paste image URL"
                value={formData.image}
                onChange={handleChange}
              />

              <span className="error">
                {errors.image}
              </span>

            </div>

            {/* Description */}
            <div className="form-group">

              <label>Description</label>

              <textarea
                rows="5"
                name="description"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>

              <span className="error">
                {errors.description}
              </span>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="submit-btn"
            >
              Add Book
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddBook;
