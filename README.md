# Online Library System

A modern and responsive Online Library System built using React + Vite.  
This project allows users to browse books by category, search books, view detailed information, and add new books using Redux state management.

---

## Features

### Home Page
- Welcome landing page
- Book categories section
- Popular books displayed in card layout
- Responsive navigation bar

### Browse Books Page
- Browse books by category
- Dynamic routing using React Router
- Search books by title or author
- View details for each book

### Book Details Page
- Detailed information about selected books
- Displays:
  - Title
  - Author
  - Description
  - Rating
- Back to Browse button

### Add Book Page
- Add new books using a form
- Redux used for state management
- Form validation implemented
- Newly added books appear instantly

### 404 Page
- Custom Page Not Found screen
- Displays invalid URL
- Link back to Home page
- Header hidden on 404 page

---

## Technologies Used

- React.js
- Vite
- React Router DOM
- Redux Toolkit
- CSS
- JavaScript (ES6)

---

## Folder Structure

```bash
ONLINE-LIBRARY-SYSTEM/
├── public/                # Static assets (favicons, etc.)
├── src/
│   ├── assets/            # Images, fonts, and global media
│   ├── components/        # Reusable UI components
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── data/              # Static data or mock JSON files
│   │   └── booksData.js
│   ├── pages/             # View components/Routes
│   │   ├── AddBook.jsx
│   │   ├── BookDetails.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── redux/             # State management (Actions, Reducers, Store)
│   ├── App.css            # Main application styles
│   ├── App.jsx            # Root component & Routing logic
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── .gitignore             # Files to ignore in Git
├── eslint.config.js       # Linting configuration
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

---

## ⚙️ Installation and Setup

### 1️ Clone the Repository

```bash
git clone <your-github-repository-link>
```

### 2️ Navigate to Project Folder

```bash
cd online-library-system
```

### 3️ Install Dependencies

```bash
npm install
```

### 4️ Start Development Server

```bash
npm run dev
```

### 5️ Open in Browser

```bash
http://localhost:5173
```

---

## Application Routes

| Route | Description |
|------|-------------|
| `/` | Home Page |
| `/books` | Browse All Books |
| `/books/:category` | Browse Books by Category |
| `/book/:id` | Book Details Page |
| `/add-book` | Add New Book |
| `*` | 404 Page |

---

## Screenshots

### Home Page
<img width="1917" height="867" alt="Screenshot 2026-05-13 133449" src="https://github.com/user-attachments/assets/011e644f-28af-460e-af25-ad3dea862010" />
<img width="476" height="630" alt="image" src="https://github.com/user-attachments/assets/00b87cda-e929-41b9-b415-87e96d175cb8" />


### Browse Books Page
<img width="1917" height="862" alt="image" src="https://github.com/user-attachments/assets/dbc3bb4a-e8e2-4e34-ab4c-7c0fe8ffda7b" />
<img width="1917" height="862" alt="image" src="https://github.com/user-attachments/assets/80e902ee-040d-49d7-a5b5-c0a8e2946f9c" />


### Book Details Page
<img width="1917" height="867" alt="image" src="https://github.com/user-attachments/assets/6bf3c70e-8bb7-48a3-a443-52be86ea75f1" />


### Add Book Page
<img width="1912" height="867" alt="image" src="https://github.com/user-attachments/assets/04d7ece4-293f-4395-9d80-21cab255fe3d" />
<img width="1917" height="856" alt="image" src="https://github.com/user-attachments/assets/50ad025d-9e69-40ac-8cc9-afbbc4e9e861" />


### 404 Page
<img width="1917" height="682" alt="image" src="https://github.com/user-attachments/assets/f92c8aa9-9039-45b6-9ac8-d01ff50c487a" />


---

## Form Validation

The Add Book form validates:
- Empty fields
- Invalid ratings
- Missing category
- Short descriptions

---

## Redux Functionality

Redux Toolkit is used to:
- Store books data
- Add new books
- Manage global application state

---

## Learning Outcomes

Through this project, I learned:
- React component structure
- React Router dynamic routing
- Redux Toolkit state management
- Form handling and validation
- Responsive UI design
- Vite project setup

---

## Note
- Dummy data is used for books collection.
- `node_modules` folder is excluded before submission.
- The repository contains multiple meaningful commits as required.

---

## GitHub Link
https://github.com/parjani/online-library-system
